export enum InputMasksEnum {
    CPF = '999.999.999-99',
    CNPJ = '99.999.999/9999-99',
    PHONE = '(99) 9999-9999',
    CELL_PHONE = '(99) 99999-9999',
    CEP = '99999-999',
}

export interface IMaskUtil {
    formatMask: (text: string, maskFormat: InputMasksEnum) => string;
    removeMask: (text?: string) => string;
}