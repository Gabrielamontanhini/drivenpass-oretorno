import { ApplicationError } from '../../../drivenpass-trilogia/src/protocols';

export function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'Not here nuthing',
  };
}
