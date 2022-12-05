import {updateNav} from './app.js'
import page from './node_modules/page/page.mjs'


export function onLogout(){
    fetch('http://localhost:3030/users/logout', {
        method: "GET",
        headers: {
            'X-Authorization' : localStorage.token
        }
    })

    localStorage.clear()
    updateNav()
    
    page.redirect('/dashboard')
}