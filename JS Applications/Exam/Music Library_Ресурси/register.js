import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import { updateNav } from './app.js'

const url = 'http://localhost:3030/users/register'
let main = document.querySelector('main')


function regTemplate() {
    let el = html`
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form class="login-form" @submit=${onSubmit}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <a href="/login">Login</a></p>
                </form>
            </div>
        </section>


    `
    return el
}

async function onSubmit(ev) {
    ev.preventDefault();

    let formData = new FormData(ev.target)
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('re-password')

    if ((email === '' || password === '' || rePass === '') && (password !== rePass)) {
        return window.alert('One or more fields are empty!')
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email, password
        })
    })

    if (response.ok) {
        const data = await response.json()
        localStorage.setItem('ownerId', data._id)
        localStorage.setItem('token', data.accessToken)
        updateNav()
        page.redirect('/dashboard')
    }
}

export const onRegister = (ctx) => render(regTemplate(), main)
