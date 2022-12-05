import { render, html } from '../../../node_modules/lit-html/lit-html.js'
import { repeat } from '../../../node_modules/lit-html/directives/repeat.js'

const url = 'http://localhost:3030/jsonstore/collections/books'


async function getItems(){
    const response = await fetch(url)
    const data = await response.json()

    generateBookHTML(data)
}
function generateInitalScreen(){

    let el = html`
        <button id="loadBooks" @click=${getItems}>LOAD ALL BOOKS</button>
        <table>
            <thead>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </thead>
        </table>

        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit">
        </form>
        
        <form id="edit-form" style="display: none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`

    render(el, document.querySelector('body'))
}

function generateBookHTML(data){
    let table = document.querySelector('table')
    let book = html`
    <tbody>
        ${repeat(Object.values(data), (item) => html`
            <tr id=${item._id}>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>
                    <button @click=${onEdit}>Edit</button>
                    <button @click=${onDelete}>Delete</button>
            </tr>
        `)}
    </tbody>
    `
    render(book, table)
}

function newBook(){
    let form = document.querySelector('form#add-form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let formData = new FormData(form)
        let title = formData.get('title').trim()
        let author = formData.get('author').trim()

        if (checkEmpty(title, author)){
            return alert('Missing field')
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title,
                author
            })
        })

        if(response.ok){
            getItems()
            form.reset()
        }

    })

}

function checkEmpty(title, author){
    if(title === '' || author === ''){
        return true
    }

    return false
}

async function onDelete(ev){
    let id = getId(ev)
    
    if (id !== ''){
        const response = await fetch(url + `/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        
        if(response.ok){
            getItems()
            alert('Book successfuly deleted!')
        }
    }

}

function getBookData(ev){
    let tr = ev.target.parentElement.parentElement
    let tds = tr.querySelectorAll('td')
    let title = tds[0].textContent
    let author = tds[1].textContent

    return [title, author]
}


function getId(ev){
    let id = ev.target.parentElement.parentElement.id
    return id
}

function onEdit(ev){
    let id = getId(ev)
    let editForm = document.querySelector('form#edit-form')
    let addForm = document.querySelector('form#add-form')
    
    addForm.style.display = 'none'
    editForm.style.display = 'block'
    let [title, author] = getBookData(ev)

    editForm.querySelector('input[name="title"]').value = title
    editForm.querySelector('input[name="author"]').value = author

    editForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        let formData = new FormData(editForm)

        let newTitle = formData.get('title')
        let newAuthor = formData.get('author')

        const response = await fetch(url + `/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTitle,
                author: newAuthor,
                

            })
        })

        // const data = await response.json()

        if (response.ok){
            editForm.style.display = 'none'
            addForm.style.display = 'block'
            getItems()
        }
    })
}

generateInitalScreen()
newBook()