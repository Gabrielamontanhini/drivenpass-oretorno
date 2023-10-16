import { Router } from "express";
import { createUser } from "../controllers/users-controllers";
import { validateBody } from '../middlewares/validation-middleware';
import { createUserSchema } from "../schemas/user-schema";


const usersRouter = Router()

usersRouter.post("/user",validateBody(createUserSchema),createUser)



export default usersRouter