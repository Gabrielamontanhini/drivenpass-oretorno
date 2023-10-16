import { SignInOrCreateUser, SignInResult } from "../../../drivenpass-trilogia/src/protocols";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

import { userRepository } from "../repositories/users-repository";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";
import { notFoundError, unauthorizedError } from "@/errors";


async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
     return token;
  }

  async function getUserOrFail(email: string){
    const user = await userRepository.findUnique(email);
    if (!user) throw invalidCredentialsError();
  
    return user;
  }
  


async function signIn(params: SignInOrCreateUser): Promise<SignInResult> {
    const { email, password } = params;
    const user = await getUserOrFail(email);
   if(!user) throw notFoundError()
    const isEqual = bcrypt.compareSync(password, user.password)
  if (!isEqual) throw invalidCredentialsError()
  
    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET ,
        { expiresIn: 24 * 60 * 60 * 7 }
    );

    return {
      userId: user.id,
    userEmail: user.email,
    token,
  };
  
  //await validatePasswordOrFail(password, user.password);

  
   
  }

export const authService = {signIn}