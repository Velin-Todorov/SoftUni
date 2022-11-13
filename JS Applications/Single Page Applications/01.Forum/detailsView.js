import {getHeaders} from './utility.js'

const section = document.getElementById('detailsView')
const main = document.getElementsByTagName('main')[0]
const form = document.querySelector('form')
form.addEventListener('submit', onSubmit)

//section.remove()


export async function showDetails(ev) {

    let id = ev.target.parentElement.parentElement.id
    const topic = loadTopic(id)
    // const comments = getComments(id)
    // const res = topicTemplate(topic, comments);
    // section.replaceChildren(res)

    main.replaceChildren(section)

}


async function loadTopic(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`

    const response = await fetch(url)
    const data = await response.json()
    return data

}

async function getComments(id) {

    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

function onSubmit(e){
    print(e)
    e.preventDefault();
    const formData = new FormData(form)
    const {postText, username} = Object.fromEntries(formData)
    createPost(postText, username);

}



async function createPost(body){

    const url = `http://localhost:3030/jsonstore/collections/myboard/comments/${body.id}`
    const response  = await fetch(url, getHeaders('POST', body))
    const data = await response.json()

    clearForm();
}

function clearForm(){
    form.reset();
}
