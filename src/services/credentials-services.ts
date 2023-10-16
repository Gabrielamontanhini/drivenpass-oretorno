import { notUniqueThing } from "@/errors";
import { CreateCredential } from "../../../drivenpass-trilogia/src/protocols";
import { credentialsRepository } from "../repositories/credentials-repository";



async function createCredential(credential: CreateCredential, userId: number){
const notUnique = await credentialsRepository.findOne(credential.credIdentifier, userId)
if (notUnique) throw notUniqueThing()
    return credentialsRepository.insertOne(credential, userId)
}


async function getUserCredentials(userId: number) {
    return credentialsRepository.findAll(userId)
}

async function deleteCredentialById(credentialId: number) {
    return credentialsRepository.deleteOne(credentialId)
}

export const credentialsService = {createCredential, getUserCredentials, deleteCredentialById}