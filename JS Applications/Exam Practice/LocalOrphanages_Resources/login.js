import { updateNav } from './app.js'
import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'

let main = document.querySelector('#main-content')
const url  = 'http://localhost:3030/users/login'


let loginTemplate = () => html`
    <section id="login-page" class="auth">
        <form id="login" @submit=${onSubmit}>
            <h1 class="title">Login</h1>
    
            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>
`

async function onSubmit(ev){
    ev.preventDefault();

    let formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')

    if (email == '' || password == ''){
        return window.alert('One or more fields is empty')
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email, password
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

export const loginView = (ctx) => render(loginTemplate(), main)