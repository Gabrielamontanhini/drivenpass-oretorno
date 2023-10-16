import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SignInOrCreateUser } from '../../../drivenpass-trilogia/src/protocols';
import { authService } from '../services/auth-services';


export async function createUserSession(req: Request, res: Response) {
   const {email, password} = req.body as SignInOrCreateUser 
   const result = await authService.signIn({ email, password });

   return res.status(httpStatus.CREATED).send(result);
}