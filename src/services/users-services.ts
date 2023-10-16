import { CreateUser } from "protocols";
import { userRepository } from "../repositories/users-repository";
import bcrypt from 'bcrypt'
import { notUniqueThing } from "@/errors";

async function createUser(user: CreateUser) {
   
    const notUniqueEmail = await userRepository.findUnique(user.email)
    if (notUniqueEmail) throw notUniqueThing()
    const password = user.password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userToDB = {email: user.email, password: hashedPassword}
    const result = await userRepository.insertOne(userToDB)
    return user
}



export const usersService = { createUser }