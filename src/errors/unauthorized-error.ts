import { ApplicationError } from '../../../drivenpass-trilogia/src/protocols';

export function unauthorizedError(): ApplicationError {
  return {
    name: 'UnauthorizedError',
    message: 'You must be signed in to continue',
  };
}
