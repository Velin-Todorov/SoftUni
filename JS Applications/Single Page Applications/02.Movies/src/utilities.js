export function checkRegister(email, pass, rePass) {
    if (email !== '' && pass !== '' && rePass !== '') {
        if (pass.length >= 6) {
            if (rePass == pass) {
                return true
            }

        }
    }
    return false
}