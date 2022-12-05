import { html, render } from './node_modules/lit-html/lit-html.js'
import { repeat } from './node_modules/lit-html/directives/repeat.js'
import page from './node_modules/page/page.mjs'



let main = document.querySelector('main')

function detailsTemp(data) {
    let el = html`
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Album Details</p>
                <div id="img-wrapper">
                    <img src=${data.imageUrl} alt="example1" />
                </div>
                <div id="info-wrapper">
                    <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
                    <p>
                        <strong>Album name:</strong><span id="details-album">${data.album}</span>
                    </p>
                    <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
                    <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
                    <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
                </div>
                <div id="likes">Likes: <span id="likes-count">0</span></div>
        
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    <a href="" id="like-btn" style="display: block;">Like</a>
                    <a href="" id="edit-btn" style="display: none;">Edit</a>
                    <a href="" id="delete-btn" style="display: none" @click=${async (ev) => {
                        ev.preventDefault();
                        const url = `http://localhost:3030/data/albums/${data._id}`

                        let result = confirm('Do you want to delete this item?')
                        if (result == true){
                            const response = await fetch(url, {
                                method: 'DELETE',
                                headers: {
                                    'X-Authorization': localStorage.getItem('token')
                                }
                            })
                            if (response.ok){
                                page.redirect('/dashboard')
                            }
                        }

                    }}>Delete</a>
                </div>
            </div>
        </section>`
    return el
}


export async function getDetails(ev){
    ev.preventDefault();

    let ownerId = localStorage.getItem('ownerId')

    const url = `http://localhost:3030/data/albums/${ev.target.id}`
    const response = await fetch(url)
    const data = await response.json()

    render(detailsTemp(data), main)
    if (ownerId !== null){
        if (ownerId == data._ownerId){
            document.getElementById('like-btn').style.display = 'none'
            document.getElementById('edit-btn').style.display = 'block'
            document.getElementById('delete-btn').style.display = 'block'
        }
    }
    page.redirect(`/details/${ev.target.id}`)
}

