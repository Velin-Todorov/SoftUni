import page from '../../node_modules/page/page.mjs'
import {html, render} from '../../node_modules/lit-html/lit-html.js'
import {loginView} from '../views/loginViews.js'
import { regView } from '../views/register.js'
import { catalog } from '../views/catalogView.js'
import {onLogout} from '../views/logout.js'
import {createView} from '../views/create.js'
import { myPublicationsView } from '../views/mypublication.js'

page('/login', loginView)
page('/register', regView)
page('/catalog', catalog)
page('/create', createView)
page('/my-furniture', myPublicationsView)

document.querySelector('#logoutBtn').addEventListener('click', onLogout)


export const updateInfo = () => {
    let userDiv = document.querySelector('#user')
    let guestDiv = document.querySelector('#guest')

    if(localStorage.length == 0){
        guestDiv.style.display = 'block'
        userDiv.style.display = 'none'
    }else{
        guestDiv.style.display = 'none'
        userDiv.style.display = 'block'
    }

}

updateInfo()
page.start();