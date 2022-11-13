import { makingNewPost } from './requests.js'
import { getHeaders, htmlForPost, checkIfEmpty } from './utility.js'
import {showDetails} from './detailsView.js'


let section = document.getElementById('homeView')
let main = document.getElementsByTagName('main')[0]
let form = document.querySelector('form')
form.addEventListener('submit', onSubmit)

// section.remove();

export async function showHome() {

    const posts = await loadPosts()
    const content = Object.values(posts).map(x => htmlForPost(x))
    document.querySelector('.topic-title').replaceChildren(...content)

    main.replaceChildren(section)
}

export function clearForm(){
    form.reset()
}


function onSubmit(ev) {
    ev.preventDefault();

    if (ev.submitter.innerHTML == 'Cancel'){
        return clearForm()
    }

    const formData = new FormData(form)
    const username = formData.get('username')
    const title = formData.get('topicName')
    const content = formData.get('postText')
    const date = new Date()

    if (!checkIfEmpty(username, title, content)){
        clearForm()
        return;
    }


    let headers = getHeaders('POST', username, title, content, date)

    let data = makingNewPost(headers)
    clearForm()

}

async function loadPosts (){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'

    const response = await fetch(url)
    const data = await response.json()

    return data
}
