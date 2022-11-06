window.addEventListener('DOMContentLoaded', onLoadHTML)

document.getElementById('logout').addEventListener('click', onLogout);

async function onLogout() {
    const url = "http://localhost:3030/users/logout";
    
    const header = getHeader("GET", '')
    const response = await fetch(url, header)
    sessionStorage.clear();
    onLoadHTML();

}

function onLoadHTML(){

    const token = sessionStorage.getItem('accessToken')
    const greeting = document.querySelector('p.email span')

    if (token){
        document.getElementById('guest').style.display = 'none'    
        document.getElementById('user').style.display = 'inline-block'
        greeting.innerHTML = sessionStorage.getItem('email')
        
    }else{
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
        greeting.innerHTML = 'guest'

    }
}

async function onCreateCatch(body){
    const url = 'http://localhost:3030/data/catches'
    const header = getHeader("POST", body)
    const response = await fetch(url, header)
    const data = await response.json();

    return data
}

async function onLoadCatch(body, header){
    const url = 'http://localhost:3030/data/catches'

}


function getHeader(method, body){

    const token = sessionStorage.getItem('accessToken')

    const header = {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json",
            "X-Authorization" : token
        },
        if (body){
            header.body= JSON.stringify(body)
        }
    }
    return header
}