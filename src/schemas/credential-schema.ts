import Joi from 'joi';
import { CreateCredential } from '../../../drivenpass-trilogia/src/protocols';



export const createCredentialSchema = Joi.object<CreateCredential>({
    credIdentifier: Joi.string().required(),
    url: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(3).required(),
});


