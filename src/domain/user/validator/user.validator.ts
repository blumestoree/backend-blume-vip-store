import ValidatorInterface from '../../../shared/validator.interface';
import * as z from 'zod';
import User from '../entity/user.entity';
import { ValidationError } from '../../../shared/types/IValidationError';
export default class UserValidator implements ValidatorInterface<User> {
  validate(entity: User): ValidationError[] | void {
    const userSchema = z.object({
      _id: z.string(),
      _name: z.string().min(2, 'Nome inválido'),
      _gameUserId: z.string(),
      _password: z.string().min(2, 'Senha inválida'),
      _email: z.string().email('Email inválido'),
    });
    try {
      userSchema.parse(entity);
    } catch (error) {
      const zodError = error as z.ZodError;
      const errorMessages = zodError.errors.map((issue) => issue.message);
      throw new Error(errorMessages.map((issue) => issue).join(', '));
    }
  }
}
