export function validateRegistration(email, password, rePass) {
    if (email.length >= 3 && password.length >= 3 && email !== '' && password !== '' && rePass != '') {
        if (password == rePass) {
            return true
        }
        return false;
    }
    return false;
}

export function getHeaders(method, body) {
    let data = {}

    data.method = `${method}`;
    data.headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    }
    if (body) {
        data.body = JSON.stringify(body)
    }

    return data
}

let section = document.getElementById('Home')
export function onSuccessReg() {
    let body = document.getElementsByTagName('body')[0]
    let nav = document.getElementById('Navigation')

    document.getElementsByClassName('nav-link')[1].style.display = ''
    document.getElementsByClassName('nav-link')[2].style.display = 'block'
    document.getElementsByClassName('nav-link')[3].style.display = 'none'
    document.getElementsByClassName('nav-link')[4].style.display = 'none'

    body.replaceChildren(nav, section)
    

}

export function onSuccessLog() {

}