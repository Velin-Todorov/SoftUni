import {html, render} from '../../../node_modules/lit-html/lit-html.js'
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js'

let form = document.querySelector('.content')

form.addEventListener('submit', getData)

function createHTML(data){
    let root = document.querySelector('#root') 
    let list = html`
    <ul>
        ${repeat(data, (item) => html`
        <li>${item}</li>`)}

    </ul>`

    render(list, root)
}
function getData(ev){
    ev.preventDefault();
    let data = new FormData(form)
    let towns = data.get('towns')
    towns = towns.split(', ')
    createHTML(towns)
}
