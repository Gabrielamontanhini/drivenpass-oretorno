import Joi from 'joi';
import { SignInOrCreateUser } from 'protocols';


export const createUserSchema = Joi.object<SignInOrCreateUser>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});
