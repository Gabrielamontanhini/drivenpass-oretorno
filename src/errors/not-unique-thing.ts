import { ApplicationError } from '../../../drivenpass-trilogia/src/protocols';

export function notUniqueThing(): ApplicationError {
  return {
    name: 'NotUniqueThing',
    message: 'something is unique and you are trying to create it again!',
  };
}
