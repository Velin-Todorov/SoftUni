import { updateNav } from './app.js'
import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'
import {repeat} from './node_modules/lit-html/directives/repeat.js'

let data = await getPosts()
let main = document.querySelector('#main-content')
let dashboardTemplate;

if (data !== null){
dashboardTemplate = () => html`
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
        <div class="all-posts"></div>
            ${repeat(data, (item) => html`
            <div class="post">
                <h2 class='post-title'>${item.title}</h2>
                <img class="post-image" src=${item.imageUrl} alt="Material Image">
                <div class="btn-wrapper">
                    <a href="/details/${item._id}" class="details-btn btn">Details</a>
                </div>
            </div>`)}
    </section>`

}else{
    dashboardTemplate = () => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            <div class="all-posts">
                <h1 class="title no-posts-title">No posts yet!</h1>
            </div>
        </section>`
    }



export async function getPosts() {
    const url = 'http://localhost:3030/data/posts?sortBy=_createdOn%20desc'

    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    return data

}

export let dashView = (ctx) => render(dashboardTemplate(), main) 