import { Router } from "express";
import { createCredential, deleteCredentialById, getUserCredentials } from "../controllers/credentials-controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { createCredentialSchema } from "../schemas/credential-schema";
import { authenticateToken } from "@/middlewares";


const credentialsRouter = Router()

credentialsRouter
    .post("/credentials",authenticateToken,validateBody(createCredentialSchema),createCredential) 
    .get("/credentials",authenticateToken, getUserCredentials)
    .delete("/credentials/:id", authenticateToken,deleteCredentialById)


export default credentialsRouter