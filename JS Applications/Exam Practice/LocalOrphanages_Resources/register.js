import { updateNav } from './app.js'
import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'

let main = document.querySelector('#main-content')
const url = 'http://localhost:3030/users/register'

let regTemplate = () => html`
    <section id="register-page" class="auth">
        <form id="register" @submit=${onSubmit}>
            <h1 class="title">Register</h1>
    
            <article class="input-group">
                <label for="register-email">Email: </label>
                <input type="email" id="register-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="register-password">Password: </label>
                <input type="password" id="register-password" name="password">
            </article>
    
            <article class="input-group">
                <label for="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Register">
        </form>
    </section>
`

async function onSubmit(ev){

    ev.preventDefault();
    let formData = new FormData(ev.target)

    let email = formData.get('email')
    let password = formData.get('password')
    let repeatPassword = formData.get('repeatPassword')
    
    if (!formValidation(password, repeatPassword, email)){
        return window.alert('Error!')
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    if (!response.ok){
        return window.alert('Something went wrong!')
    }

    const data = await response.json()

    localStorage.setItem('ownerId', data._id)
    localStorage.setItem('token', data.accessToken)
    page.redirect('/dashboard')
    updateNav()
}

function formValidation(pass, repass, email){
    if ((pass != '' || repass != '' || email != '') && (pass===repass)){
        return true
    }

    return false
}

export const regView = (ctx) => render(regTemplate(), main)