import { showDashboard } from "./dashboard.js"

let main
let section


export async function showIdeaDetails(id) {
    const url = `http://localhost:3030/data/ideas/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export function createIdeaDetailsCard(data) {

    let div = document.createElement('div')
    div.className = 'container home some'

    div.innerHTML = `
        <img class="det-img" src=${data.img}></img>
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
            <a class="btn detb" id="${data._id}" href="" style="display: none;">Delete</a>
        </div>
    </div>        
    `
    let a = div.querySelector('a.btn.detb')

    let userId = localStorage.getItem('userId')

    if ( userId!== null && userId == data._ownerId) {
        a.style.display = 'block'
    }

    a.addEventListener('click', async function onDelete(e) {
        
        e.preventDefault(); 
        const url = `http://localhost:3030/data/ideas/${e.target.id}`

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'X-Authorization': localStorage.getItem('authToken')
            }
        })

        if (response.ok){
            alert('Idea deleted')
            showDashboard()
        }
    })

    return div
}

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
}

export async function showDetails(id) {
    section.innerHTML = ''
    main.innerHTML = ''
    main.appendChild(section)

    const data = await (showIdeaDetails(id))
    const div = createIdeaDetailsCard(data)

    section.appendChild(div)
}
