import {html, render} from './node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js'

let divContacts = document.querySelector('#contacts')

function createContactCards(contact){
    let contactCard =  html`<div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar">
            </i>
        </div>
        <div class="info">
            <h2> Name: ${contact.name}</h2>
            <button class="detailsBtn" @click=${onClick}>Details</button>
            <div class="details" id=${contact.id}>
                <p>Phone number: ${contact.phoneNumber}</p>
                <p>Email: ${contact.email}</p>
            </div>
        </div>`

    return contactCard

    function onClick(ev){
        if(document.getElementById(`${contact.id}`).style.display =='none'){
            document.getElementById(`${contact.id}`).style.display ='block'
        }else{
            document.getElementById(`${contact.id}`).style.display ='none'
        }
    }
}  
render(contacts.map(createContactCards), divContacts)
