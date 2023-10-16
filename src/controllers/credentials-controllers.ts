import { Request , Response } from "express";
import { credentialsService } from "../services/credentials-services";
import httpStatus from "http-status";
import { CreateCredential } from "../../../drivenpass-trilogia/src/protocols";
import { AuthenticatedRequest } from "@/middlewares";

export async function createCredential(req:AuthenticatedRequest, res: Response) {
    const credential = req.body as CreateCredential
    const {userId} = req

    await credentialsService.createCredential(credential, Number(userId) )
    res.sendStatus(httpStatus.CREATED);
}

export async function getUserCredentials(req:AuthenticatedRequest, res: Response) {
    const {userId} = req
    const credentialsOfUser = await credentialsService.getUserCredentials(Number(userId))
    return res.status(httpStatus.OK).send(credentialsOfUser);
}

export async function deleteCredentialById(req:Request, res: Response)  {
    
    const {credentialId} = req.params
    await credentialsService.deleteCredentialById(Number(credentialId))
    return res.sendStatus(httpStatus.OK)
}