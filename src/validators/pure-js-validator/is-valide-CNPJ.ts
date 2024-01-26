export const isValideCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/gi, '');

    if (cnpj.length !== 14) {
      return false;
    }

    if (cnpj[0].repeat(14) === cnpj) {
      return false;
    }

    if (calc(cnpj, 12) !== Number(cnpj[12])) {
      return false;
    }

    return (
      calc(cnpj, 12) === Number(cnpj[12]) &&
      calc(cnpj, 13) === Number(cnpj[13])
    );
}

const calc = (cnpj: string, slice: number) => {
    cnpj = cnpj.slice(0, slice);
    let factor = slice - 7;
    let sum = 0;

    for (let i = slice; i > 0; i--) {
        const n = Number(cnpj[slice - i]);
        sum += n * factor--;

        if (factor < 2) {
            factor = 9;
        }
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
}