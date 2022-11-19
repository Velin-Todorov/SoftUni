import { validateRegistration, getHeaders, onSuccessReg } from './utility.js'

export function register() {

    let body = document.getElementsByTagName('body')[0]
    let section = document.getElementById('Register')
    let navigation = document.getElementById('Navigation')

    body.replaceChildren(navigation, section)

    let form = body.querySelector('form')
    form.addEventListener('submit', registration)

   
    async function registration(ev) {
        ev.preventDefault();

        let formData = new FormData(form)
        let email = formData.get('email')
        let pass = formData.get('password')
        let rePass = formData.get('repeatPassword')

        const url = 'http://localhost:3030/users/register'
        try {

            let body = {
                email,
                password: pass,
            }

            if (!validateRegistration(email, pass, rePass)) {
                form.reset();
                return;
            }


            const response = await fetch(url, getHeaders('POST', body))
            const data = await response.json()
            localStorage.setItem('email', JSON.stringify(data.email))
            localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
            
            if (response.status == 200){
                onSuccessReg()
            }

        } catch (error) {
            alert(`Error: ${error.message}`)
        }
        
    }
    form.reset()
}