
import prisma from "@/database/db.connection"
import { CreateUser } from "../../../drivenpass-trilogia/src/protocols"
import { User } from "@prisma/client";



async function insertOne(data: CreateUser) {
    return await prisma.user.create({
    data
})
}

async function findUnique(email: string) {
    return await prisma.user.findUnique({
        where:{ email}
    })
}

function readById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
}


export const userRepository = { insertOne , findUnique , readById}