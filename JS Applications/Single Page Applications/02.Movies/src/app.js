import { setupHome, showHome } from "./home.js";
import { setupDetails } from "./details.js";
import { setupLogin, showLogin } from "./login.js";
import { setupRegister, showRegister } from "./register.js";
import { setupCreate, showCreate } from "./create.js";
import { setupEdit } from "./edit.js";

const main = document.querySelector('main');
const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate
}

setupSection('home-page', setupHome)
setupSection('add-movie', setupCreate)
setupSection('movie-details', setupDetails)
setupSection('edit-movie', setupEdit)
setupSection('form-login', setupLogin)
setupSection('form-sign-up', setupRegister)

setupNavigation()
showHome()

function setupNavigation() {

    const email = sessionStorage.getItem('email');

    if (email != null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        Array.from(document.querySelectorAll('nav .user')).forEach(l => l.style.display = 'block');
        Array.from(document.querySelectorAll('nav .guest')).forEach(l => l.style.display = 'none');

    } else {
        Array.from(document.querySelectorAll('nav .guest')).forEach(l => l.style.display = 'block')
        Array.from(document.querySelectorAll('nav .user')).forEach(l => l.style.display = 'none');

    }



    document.querySelector('nav').addEventListener('click', (ev) => {


        const view = links[ev.target.id]

        if (typeof view == 'function') {
            ev.preventDefault();
            view();
        }

    });
    document.getElementById('createLink').addEventListener('click', (ev) => {
        ev.preventDefault();
        showCreate();
    });

    document.getElementById('logoutBtn').addEventListener('click', logout)

}

async function logout() {
    const authToken = sessionStorage.getItem('authToken')
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': authToken
        }
    });

    if (response.ok){
        sessionStorage.removeItem('authToken');    
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        Array.from(document.querySelectorAll('nav .guest')).forEach(l => l.style.display = 'block')
        Array.from(document.querySelectorAll('nav .user')).forEach(l => l.style.display = 'none');

        showHome();
    }

}

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId)
    setup(main, section)
}