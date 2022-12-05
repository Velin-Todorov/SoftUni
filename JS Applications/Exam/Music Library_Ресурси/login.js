import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import { updateNav } from './app.js'

const url = 'http://localhost:3030/users/login'
let main = document.querySelector('main')


function logTemplate() {

    let el = html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onSubmit}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>`

    return el
}


async function onSubmit(ev) {
    ev.preventDefault();

    let formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')

    if (email === '' || password === '') {
        return window.alert('One or more fields are missing!')
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

    if (!response.ok) {
        return window.alert('Something went wrong!')
    }

    const data = await response.json()
    localStorage.setItem('ownerId', data._id)
    localStorage.setItem('token', data.accessToken)
    updateNav()
    page.redirect('/dashboard')


}

export const logView = (ctx) => render(logTemplate(), main)