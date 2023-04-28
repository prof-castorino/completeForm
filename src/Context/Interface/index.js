export const AddressProps = {
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    SendByCep: false,
}

export const AffiliationProps = {
    mother: '',
    father: '',
    noAffiliation: false,
}
const now = new Date()
export const ContactProps = {
    name: '',
    email: '',
    age: new Date(now.getFullYear() - 18, now.getMonth(), now.getDate()),
    phone: ''
}

export const DocumentProps = {
    rg: '',
    cpf: '',
    passport: '',
    foreigner: false,
}

export const TermProps = {
    accept: false,
    newsletter: false,
}