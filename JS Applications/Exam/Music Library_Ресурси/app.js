import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import { showHome } from './home.js'
import {onRegister} from './register.js'
import {logView} from './login.js'
import {onLogout} from './logout.js'
import {dashView} from './dashboard.js'
import {showCreate} from './create.js'


page('/', showHome)
page('/index.html', showHome)
page('/register', onRegister)
page('/login', logView)
page('/dashboard', dashView)
page('/create', showCreate)

document.querySelector('.logoutBtn').addEventListener('click', onLogout)

export function updateNav() {
    if (localStorage.length == 0) {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    } else {
        document.querySelector('.user').style.display = 'block'
        document.querySelector('.guest').style.display = 'none'
    }
}

updateNav()
page.start()