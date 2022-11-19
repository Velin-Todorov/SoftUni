import { login } from './login.js'
import { register } from './register.js'

let body = document.getElementsByTagName('body')[0]
let sectionReg = document.getElementById('Register')
let sectionLog = document.getElementById('Login')
let sectionHome = document.getElementById('Home')
let sectionDetails = document.getElementById('ContentDetails')
let sectionDashboard = document.getElementById('Dashboard')
let sectionIdeas = document.getElementById('SharingIdeas')
let footer = document.querySelector('footer')

let navBarLinks = document.querySelector('#navbarResponsive ul')
let navigation = document.getElementById('Navigation')

navBarLinks.addEventListener('click', controller)
navigation.querySelector('.navbar-brand').addEventListener('click', bodyReplaceHome)


function controller(ev) {
    ev.preventDefault();
    if (ev.target.parentElement.innerText == 'Register') {
        bodyReplaceReg()
        register()
    } else if (ev.target.parentElement.innerText == 'Login') {
        bodyReplaceLog()
        login()
    } else if (ev.target.parentElement.innerText == 'Dashboard') {
        bodyReplaceDashboard()
    }
    
}

function bodyReplaceReg() {
    sectionReg.style.display = 'block'
    body.replaceChildren(navigation, sectionReg)
}

function bodyReplaceLog() {
    sectionLog.style.display = 'block'
    body.replaceChildren(navigation, sectionLog)

}
function bodyReplaceHome(ev) {
    ev.preventDefault();
    body.replaceChildren(navigation, sectionHome, footer)
}

function bodyReplaceDashboard() {
    sectionDashboard.style.display = 'block'
    body.replaceChildren(navigation, sectionDashboard)
}

