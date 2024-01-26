import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isValideCNPJ } from '../pure-js-validator/is-valide-CNPJ';

@ValidatorConstraint({
  name: 'isCNPJ',
  async: false,
})
export class IsCNPJ implements ValidatorConstraintInterface {
  validate(
    cnpj: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    return isValideCNPJ(cnpj)
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'cnpj is invalid';
  }
}
