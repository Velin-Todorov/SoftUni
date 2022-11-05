function attachEvents() {
    let submit = document.getElementById('submit')
    let refresh = document.getElementById('refresh')

    let textarea = document.getElementById('messages')
    let author = document.getElementsByName('author')[0]
    let content = document.getElementsByName('content')[0]

    let baseURL = 'http://localhost:3030/jsonstore/messenger'

    submit.addEventListener('click', (ev) => {
        fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                author: author.value,
                content: content.value
            })
        })       
    })

    refresh.addEventListener('click', () => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                let text = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n')
                textarea.textContent = text
            })
    })


}

attachEvents();