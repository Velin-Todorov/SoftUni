import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import {repeat} from './node_modules/lit-html/directives/repeat.js'
import {getDetails} from './showDetail.js'

let main = document.querySelector('main')

function dashTemp(data) {
    let el;

    if (data.length == 0){
        el = html`
        <section id="dashboard">
            <h2>Albums</h2>
            <ul class="card-wrapper">
                <h2>
                    There are no albums added yet.
                </h2>
            </ul>
        `
    }
    else {
        el = html`
        <section id="dashboard">
            <h2>Albums</h2>
            <ul class="card-wrapper">
                ${repeat(data, (item) => html`
                    <li class="card">
                        <img src=${item.imageUrl} alt="travis" />
                        <p>
                        <strong>Singer/Band:</strong><span class="singer">${item.singer}</span>
                        </p>
                        <p>
                        <strong>Album name: </strong><span class="album">${item.album}</span>
                        </p>
                        <p><strong>Sales:</strong><span class="sales">${item.sales}</span></p>
                        <a class="details-btn" href=${'/details/' + item._id} id=${item._id} @click=${getDetails}>Details</a>
                    </li>`)}
            </ul>
        </section>`
    }
    return el
}

export function dashView(){
    
    async function getAlbums() {
        const url = 'http://localhost:3030/data/albums?sortBy=_createdOn%20desc'
    
        const response = await fetch(url)
        const data = await response.json()
    
        render(dashTemp(data), main)
        
    }
    getAlbums()
}

