import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isValideCPF } from '../pure-js-validator/is-valide-CPF';

@ValidatorConstraint({
  name: 'isCPF',
  async: false,
})
export class IsCPF implements ValidatorConstraintInterface {
  validate(cpf?: string, validationArguments?: ValidationArguments): boolean {
    return isValideCPF(cpf);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'cpf is not valid';
  }
}
