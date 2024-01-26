export const isValideCPF = (cpf) => {
    if (cpf) {
        cpf = cpf.replace(/[^0-9]/gi, '');

        if (cpf.length !== 11) {
            return false;
        }

        if (cpf[0].repeat(11) === cpf) {
            return false;
        }

        for (let t = 9; t < 11; t++) {
            let digit = 0,
                cont = 0;
            for (cont = 0; cont < t; cont++) {
                digit += Number(cpf[cont]) * (t + 1 - cont);
            }

            digit = ((10 * digit) % 11) % 10;

            if (Number(cpf[cont]) !== digit) {
                return false;
            }
        }
    }
    return true;
}