import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'


let main = document.querySelector('main')

function homeTemplate(){
    let el = html`
        <section id="home">
        <img src="./images/landing.png" alt="home" />

        <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
      </section>
    `

    return el
}

export let showHome = (ctx) => render(homeTemplate(), main)

