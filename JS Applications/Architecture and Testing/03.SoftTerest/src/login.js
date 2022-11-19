import {getHeaders} from './utility.js'

export function login(){
    let body = document.getElementsByTagName('body')[0]
    let section = document.getElementById('Login')
    let navigation = document.getElementById('Navigation')

    body.replaceChildren(navigation, section)

    let form = document.querySelector('form')
    form.addEventListener('submit', login)

    async function login(ev){
        ev.preventDefault();

        let formData = new FormData(form)

        let email = formData.get('email')
        let password = formData.get('password')
        const url = 'http://localhost:3030/users/login'
        
        try{
            if (email !== '' && password !== ''){
                const response = await fetch (url, getHeaders('POST',{email, password}))
                const data = await response.json()
                localStorage.setItem('email', JSON.stringify(data.email))
                localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
                
            }

        }catch (error){
            alert(`Error: ${error.message}`)
        }   

        form.reset()

    }

}