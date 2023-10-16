import { Request , Response } from "express";
import httpStatus from "http-status";
import { usersService } from "../services/users-services";
import { CreateUser } from "../../../drivenpass-trilogia/src/protocols";


export async function createUser(req:Request, res: Response){
    const user = req.body as CreateUser
    
   await usersService.createUser(user)
    res.status(httpStatus.CREATED).send("ok");
    
}