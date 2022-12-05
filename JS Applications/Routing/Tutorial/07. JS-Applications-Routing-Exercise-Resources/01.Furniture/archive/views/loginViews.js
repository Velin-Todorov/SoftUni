import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { updateInfo } from "../src/app.js";
import page from '../../node_modules/page/page.mjs'


let loginTemplate = () => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`  

export const loginView = (ctx) => render(loginTemplate(), document.querySelector('.container'))

async function onSubmit(event){

    const url = 'http://localhost:3030/users/login'

    event.preventDefault();
    let formData = new FormData(event.currentTarget)
    let password = formData.get('password')
    let email = formData.get('email')

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email, 
            password,
        })
    })

    const data = await response.json()
    
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('ownerId', data._id)
    updateInfo()
    page.redirect('/catalog')

}

