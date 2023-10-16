import { userRepository } from "@/repositories/users-repository";
import { unauthorizedError } from "../errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from 'jsonwebtoken';
import { User } from "@prisma/client";
import { CreateUser, UserProfile } from "@/protocols";
import dotenv from 'dotenv'
dotenv.config()

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) throw unauthorizedError();
  
    const token = authHeader.split(' ')[1];
    if (!token) throw unauthorizedError();

    try {
      const secret = process.env.JWT_SECRET
   
      jwt.verify(token, secret, async (error: jwt.VerifyErrors, decoded: jwt.JwtPayload) => {

          if (error) return res.status(httpStatus.UNAUTHORIZED).send("token is not valid");

          const user: User | null = await userRepository.readById(decoded.id);
       
          if (user == null) return res.status(httpStatus.UNAUTHORIZED).send("user does not exist");

          const { password, ...userProfile } = user;
          req.userId = userProfile.id as number
          return next();
      });
  } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
  
    
 
  }
  


export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
