let url = 'http://localhost:3030/jsonstore/collections/books'
let form = document.getElementsByTagName('form')[0]

let tbody = document.querySelector('tbody')
let loadBtn = document.getElementById('loadBooks')


loadBtn.addEventListener('click', getBooks)

form.addEventListener('submit', addEntry)

async function getBooks() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        renderLoadedBooks(data)


    } catch (error) {
        console.log(`Error: ${error}`)
    }
}


function getDataId(ev) {
    let parent = ev.target.parentElement.parentElement
    let id = parent.getAttribute('id')

    return id
}


async function deletion(ev) {
    let id = getDataId(ev)
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`

    const response = await fetch(url, {
        method: 'DELETE'
    })

    ev.target.parentElement.parentElement.remove();
}

async function EditingInput(ev) {
    let id = getDataId(ev)
    try {
        let url = `http://localhost:3030/jsonstore/collections/books/${id}`

        const response = await fetch(url)
        const data = await response.json()

        document.querySelector('form [name="title"]').value = data.title
        document.querySelector('form [name="author"]').value = data.author
        document.querySelector('form h3').textContent = 'Edit FORM'
        let button = document.querySelector('form button')
        button.textContent = 'Save'
        form.removeEventListener('submit', addEntry)
        form.addEventListener('submit', updateData)

        async function updateData(ev) {
            ev.preventDefault();
            let url = `http://localhost:3030/jsonstore/collections/books/${id}`
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    author: document.querySelector('form [name="author"]').value,
                    title: document.querySelector('form [name="title"]').value
                })

            })
            const data = await response.json()
            let tr = document.getElementById(`${id}`)
            let tds = tr.children
            tds[0].textContent = data.title
            tds[1].textContent = data.author

            document.querySelector('form [name="author"]').value = ''
            document.querySelector('form [name="title"]').value = ''
            document.querySelector('form h3').textContent = 'FORM'
            button.textContent = 'Submit'

            form.removeEventListener('submit', updateData)
            form.addEventListener('submit', addEntry)
        }

    }
    catch (error) {
        console.log(`Error: There is something wrong`)
    }
}

function renderLoadedBooks(data) {
    tbody.innerHTML = ''
    Object.entries(data).forEach(el => {

        let tr = document.createElement('tr')
        let buttonDel = document.createElement('button')
        let buttonEdit = document.createElement('button')


        let title = el[1].title
        let author = el[1].author
        let id = el[0]

        let tdTitle = document.createElement('td')
        let tdAuthor = document.createElement('td')
        let tdButtons = document.createElement('td')

        tdTitle.textContent = title
        tdAuthor.textContent = author

        buttonDel.textContent = 'Delete'
        buttonEdit.textContent = 'Edit'
        buttonDel.addEventListener('click', deletion)
        buttonEdit.addEventListener('click', EditingInput)

        tdButtons.appendChild(buttonEdit)
        tdButtons.appendChild(buttonDel)

        tr.setAttribute('id', id)
        tr.appendChild(tdTitle)
        tr.appendChild(tdAuthor)
        tr.appendChild(tdButtons)

        tbody.appendChild(tr)

    })
}

function renderPOSTData(data) {
    let tr = document.createElement('tr')
    let buttonDel = document.createElement('button')
    let buttonEdit = document.createElement('button')

    let title = data.title
    let author = data.author
    let id = data._id

    let tdTitle = document.createElement('td')
    let tdAuthor = document.createElement('td')
    let tdButtons = document.createElement('td')

    tdTitle.textContent = title
    tdAuthor.textContent = author

    buttonDel.textContent = 'Delete'
    buttonEdit.textContent = 'Edit'
    buttonDel.addEventListener('click', deletion)
    buttonEdit.addEventListener('click', EditingInput)

    tdButtons.appendChild(buttonEdit)
    tdButtons.appendChild(buttonDel)

    tr.setAttribute('id', id)
    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdButtons)

    tbody.appendChild(tr)
}


async function addEntry(ev) {
    ev.preventDefault()
    let formData = new FormData(form)

    if (formData.get('author').trim() == '' || formData.get('title').trim == '') {
        throw new Error('Those fields cannot be empty!')
    }

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                author: formData.get('author').trim(),
                title: formData.get('title').trim()
            })
        })
        const data = await response.json()
        renderPOSTData(data)
        document.querySelector('form [name="author"]').value = ''
        document.querySelector('form [name="title"]').value = ''

    } catch (error) {
        console.log(`Error: ${error}`)
    }

}