export const Phone = (phone, value) => {
    if (value.length == 1 && phone.length == 0) {
        return "(" + value
    }
    if (value.length == 3 && phone.length == 2) {
        return value + ") "
    }
    if (value.length == 10 && phone.length == 9) {
        return value + "-"
    }
    return value
}

export const Date = (date, value) => {
    if (value.length == 2 && date.length == 1) {
        return value + "/"
    }
    if (value.length == 5 && date.length == 4) {
        return value + "/"
    }
    return value
}

export const CEP = (cep, value) => {
    if (value.length == 5 && cep.length == 4) {
        return value + "-"
    }
    return value
}

export const CPF = (cpf, value) => {
    if (
        (value.length == 3 && cpf.length == 2) || (value.length == 7 && cpf.length == 6)
    ) {
        return value + "."
    }
    if (value.length == 11 && cpf.length == 10) {
        return value + "-"
    }
    return value
}

