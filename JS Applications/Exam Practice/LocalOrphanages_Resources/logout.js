import { updateNav } from './app.js'


export async function onLogout(ev){
    
    const url = 'https://localhost:3030/users/logout'
    ev.preventDefault();

    const response = await fetch(url, {
        method: "GET",
        headers: {
            'X-Authorization': localStorage.token
        }
    })

    localStorage.clear()
    page.redirect('/dashboard')
    updateNav()

}
