import Joi from 'joi';
import { SignInOrCreateUser } from '../../../drivenpass-trilogia/src/protocols';


export const signInSchema = Joi.object<SignInOrCreateUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
