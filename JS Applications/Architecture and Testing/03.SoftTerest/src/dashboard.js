import {showDetails, createIdeaDetailsCard} from './showDetails.js'

let main;
let section
let container;

export function setupDashboard(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('#dashboard-container')

    container.addEventListener('click', async event => {
        if (event.target.classList.contains('btnDetails')) {
            event.preventDefault();
            createIdeaDetailsCard(await showDetails(event.target.id))
        }
    })
}

export async function showDashboard() {
    container.innerHTML = 'Loading&hellip;'
    main.innerHTML = '';
    main.appendChild(section)

    const ideas = await getAllIdeas();
    const ideaCards = ideas.map(createIdeaCard)

    const fragment = document.createDocumentFragment()
    ideaCards.forEach(c => fragment.appendChild(c))

    container.innerHTML = ''
    container.appendChild(fragment)

}

async function getAllIdeas() {
    const url = 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc'
    const response = await fetch(url)
    const data = response.json()

    return data
}
function createIdeaCard(data) {
    
    const element = document.createElement('div')
    if (data) {
        element.className = 'card overflow-hidden current-card details'
        element.innerHTML = `
        <div class="card-body">
            <p class="card-text">${data.title}</p>
        </div>
        <img class="card-image" src="${data.img}" alt="Card image cap">
        <a class="btnDetails" id="${data._id}" href="">Details</a>`
    }
    else{
        element.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`
    }
    return element
}

