
export const hasCPF = (cpf) => {
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
}

export const hasName = (nome) => {
    var regName = /^[A-Z][a-z].* [A-Z][a-z]+$/;
    return regName.test(nome)
}

export const hasEmail = (email) => {
    var regEmail = /\S+@\S+\.\S+/;
    return regEmail.test(email)
}

export const hasPhone = (phone) => {
    var regPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return regPhone.test(phone)
}
