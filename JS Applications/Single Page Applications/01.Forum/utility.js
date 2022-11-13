import {showDetails} from './detailsView.js'


export function getHeaders(method, ...params) {
    let data = {}
    let [username, title, content, date] = params

    data.method = `${method}`;
    data.headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (params) {
        data.body = JSON.stringify({
            title: title,
            username: username,
            content: content,
            date
        })
    }

    return data
}

export function htmlForPost(data) {
    const info = data
    let section = document.querySelector('#homeView')

    let div = document.createElement('div')
    div.setAttribute('class', 'topic-title')


    div.innerHTML += `
    <div class="topic-container">
        <div class="topic-name-wrapper">
            <div class="topic-name" id=${info._id}>
                <a href="#" class="normal">
                 <h2>${info.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${info.date}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${info.username}</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    div.querySelector('a').addEventListener('click', showDetails)
   return div
}


export function checkIfEmpty(title, username, text){
    if (title && username && text){
        return true
    }else{
        return false
    }
}

export function createComments(data){
    
}