import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import {loginView} from './login.js'
import {regView} from './register.js'
import {onLogout} from './logout.js'
import {dashView} from './dashboard.js'

page('/login', loginView)
page('/register', regView)
page('/dashboard', dashView)


document.querySelector('.logoutBtn').addEventListener('click', onLogout)

export function updateNav() {
    if (localStorage.length == 0) {
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    } else {
        document.querySelector('#user').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
    }
}

updateNav()
dashView()
page.start()