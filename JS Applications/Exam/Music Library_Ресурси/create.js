import page from './node_modules/page/page.mjs'
import { html, render } from './node_modules/lit-html/lit-html.js'

const url = 'http://localhost:3030/data/albums'

let main = document.querySelector('main')

function createTemp() {
    let el = html`
        <section id="create">
            <div class="form">
                <h2>Add Album</h2>
                <form class="create-form" @submit=${onSubmit}>
                    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                    <input type="text" name="album" id="album-album" placeholder="Album" />
                    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                    <input type="text" name="release" id="album-release" placeholder="Release date" />
                    <input type="text" name="label" id="album-label" placeholder="Label" />
                    <input type="text" name="sales" id="album-sales" placeholder="Sales" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    `

    return el
}


async function onSubmit(ev){
    ev.preventDefault();

    let formData = new FormData(ev.target)
    let singer = formData.get('singer')
    let album = formData.get('album')
    let imageUrl = formData.get('imageUrl')
    let release = formData.get('release')
    let label = formData.get('label')
    let sales = formData.get('sales')

    if (singer === '' ||
        album === '' ||
        imageUrl === '' ||
        release === '' ||
        label === '' ||
        sales === ''){
            return window.alert('One or more fields are missing!')}

    const response = await fetch(url, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        })
    })

    if(response.ok){
        page.redirect('/dashboard')
    }
    
}

export const showCreate = (ctx) => render(createTemp(), main)