import { CreateCredential } from "../../../drivenpass-trilogia/src/protocols"
import prisma from "@/database/db.connection"

async function insertOne(credential: CreateCredential, userId: any) {
    return await prisma.credential.create({
      data: {
        userId: userId, 
        title: credential.credIdentifier,
        url: credential.url,
        username: credential.username,
        password: credential.password
      }
    })
}

async function findAll(userId:number) {
    const credentials = await prisma.credential.findMany({
        where:{
            userId: userId
        }
    })
    return credentials
}

async function deleteOne(credentialId: number) {
    return await prisma.credential.delete({
        where:{
            id: credentialId
        }
    })
}

async function findOne(credentialIdentifier: string, userId: number) {
    const credential = await prisma.credential.findFirst({
        where:{
            AND:[
                {userId: userId},
                {title: credentialIdentifier}
            ]
            
        }
    })
    return credential
}

export const credentialsRepository = {
    insertOne , findAll , deleteOne , findOne
}