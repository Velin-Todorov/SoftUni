import { render, html } from '../../../node_modules/lit-html/lit-html.js'
import { repeat } from '../../../node_modules/lit-html/directives/repeat.js'

let select = document.querySelector('#menu')
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

function addItem() {
    getItems()
    NewItem()
}
async function getItems() {
   
    const response = await fetch(url)
    const data = await response.json()
    generateOptions(data)
}

function generateOptions(data) {
    //ul generation here
    let options = html`
    ${repeat(Object.values(data), (item) => html`
        <option value=${item._id}>${item.text}</option>`)}
    `
    render(options, select)
}

function NewItem() {
    let form = document.querySelector('form')

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        let formData = new FormData(form)
        let text = formData.get('itemText')

        if (text !== ''){
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    text
                })
            })
            const data = await response.json()
    
            if(response.ok){
                getItems()
            }
            
        }
    })
}
addItem()