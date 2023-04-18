export const maskPhone = (phone, value) => {
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

export const maskDate = (phone, value) => {
    if (value.length == 2 && phone.length == 1) {
        return value + "/"
    }
    if (value.length == 5 && phone.length == 4) {
        return value + "/"
    }
    return value
}