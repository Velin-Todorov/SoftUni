import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { updateInfo } from "../src/app.js";
import page from '../../node_modules/page/page.mjs'
import { catalog } from "./catalogView.js";

const myPublicationsTemplate = (catalog) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${catalog.map(c => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${"01.Furniture/" + c.img} />
                    <p>${c.description}</p>
                    <footer>
                        <p>Price: <span>${c.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${c._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        `)}
    </div>

`

const getMyPublications = () => {
    return fetch('http://localhost:3030/data/catalog')
    .then(res => res.json())
    .then(data => {
        return Object.values(data.filter(x => x._ownerId == localStorage.ownerId))
    })
}

export const myPublicationsView = (ctx) => 
getMyPublications()
.then(catalog => render(myPublicationsTemplate(catalog), document.querySelector('.container')))