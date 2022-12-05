import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { updateInfo } from "../src/app.js";
import page from '../../node_modules/page/page.mjs'

let regTemplate = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`

async function onSubmit (event){
    const url = 'http://localhost:3030/users/register'

    event.preventDefault();

    let formData = new FormData(event.target)
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('rePass')

    if(!regValidation(password, rePass)){
        return alert('Passwords do not match!')
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email,
            password       
        })
    })

    const data = await response.json()

    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('ownerId', data._id)
    updateInfo()
    page.redirect('/catalog')
}


function regValidation(pass, rePass){

    if (pass == rePass){
        return true
    }else{
        return false
    }

}

export const regView = (ctx) => render(regTemplate(), document.querySelector('.container'))