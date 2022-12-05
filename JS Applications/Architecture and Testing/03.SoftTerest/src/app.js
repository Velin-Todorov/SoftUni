import { setupHome, showHome } from './home.js'
import { setupLogin, showLogin } from './login.js'
import { setupRegister, showRegister } from './register.js'
import { setupDashboard, showDashboard } from './dashboard.js'
import { setupDetails } from './showDetails.js'
import { showCreate, setupCreate } from './create.js'


const main = document.querySelector('main')


const links = {
    'home-link': showHome,
    'registerLink': showRegister,
    'loginLink': showLogin,
    'dashboard-link': showDashboard,
    'create-link': showCreate
}

setupSection('home', setupHome)
setupSection('register', setupRegister)
setupSection('login', setupLogin)
setupSection('dashboard', setupDashboard)
setupSection('contentDetails', setupDetails)
setupSection('sharingIdeas', setupCreate)

setupNavigation()
showHome()

function setupNavigation() {
    const authToken = localStorage.getItem('authToken')

    if (authToken != null) {
        Array.from(document.querySelectorAll('.nav-item-guest')).forEach(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.nav-item-user')).forEach(x => x.style.display = 'block')
    } else {
        Array.from(document.querySelectorAll('.nav-item-user')).forEach(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.nav-item-guest')).forEach(x => x.style.display = 'block')
    }

    document.getElementById('Navigation').addEventListener('click', (ev) => {
        const view = links[ev.target.id]

        if (typeof view == 'function') {
            ev.preventDefault(),
                view();
        }
    })

    document.getElementById('logoutBtn').addEventListener('click', logout)

}

async function logout(ev) {

    ev.preventDefault();
    
    const authToken = localStorage.getItem('authToken')
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': authToken
        }
    });

    if (response.ok){
        localStorage.removeItem('authToken');    
        localStorage.removeItem('userId');
        localStorage.removeItem('email');

        Array.from(document.querySelectorAll('.nav-item-guest')).forEach(l => l.style.display = 'block')
        Array.from(document.querySelectorAll('.nav-item-user')).forEach(l => l.style.display = 'none');

        showHome();
    }

}


function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId)
    setup(main, section)
}