import { createUserSession } from '../controllers/auth-controllers';
import { Router } from 'express';
import { validateBody } from '../middlewares/validation-middleware';
import { signInSchema } from '../schemas/auth-schema';

const authRouter = Router()

authRouter.post("/sign-in", validateBody(signInSchema), createUserSession) //feito

export default authRouter
