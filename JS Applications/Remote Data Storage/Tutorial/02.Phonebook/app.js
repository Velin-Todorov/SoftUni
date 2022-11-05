function attachEvents() {
    let btnLoad = document.getElementById('btnLoad')
    let btnCreate = document.getElementById('btnCreate')

    let phonebook = document.getElementById('phonebook')

    let person = document.getElementById('person')
    let phone = document.getElementById('phone')

    btnCreate.addEventListener('click', createEntry)
    btnLoad.addEventListener('click', getEntries)


    async function createEntry() {
        const url = 'http://localhost:3030/jsonstore/phonebook'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        })
        person.value = '';
        phone.value = '';
    }

    async function getEntries() {
        const url = 'http://localhost:3030/jsonstore/phonebook'
        const response = await fetch(url)
        const data = await response.json()

        createListEntries(data)

    }

    async function Load() {
        const url = 'http://localhost:3030/jsonstore/phonebook'
        const response = await fetch(url)
        const data = await response.json()

        return data
    }

    function createListEntries(data) {
        phonebook.innerHTML = ''
        Object.values(data).forEach(rec => {
            let buttonDelete = document.createElement('button')
            let li = document.createElement('li')

            let person = rec.person
            let phone = rec.phone
            li.setAttribute('data-id', rec._id)
            li.textContent = `${person}: ${phone}`

            buttonDelete.textContent = 'Delete'
            buttonDelete.addEventListener('click', deletion)
            li.appendChild(buttonDelete)

            phonebook.appendChild(li)

        })
        Load()
    }

    function getHeader(method, body) {
        return {
            method: `${method}`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    }

    async function deleteEntries(id) {
        headers = getHeader('DELETE', null)
        const url = `http://localhost:3030/jsonstore/phonebook/${id}`
        const response = await fetch(url, headers)
        const data = response.json()

        return data;
    }
    function deletion(ev) {
        let parent = ev.target.parentElement
        const li = parent.getAttribute('data-id')

        deleteEntries(li)
        parent.remove()
    }
}

attachEvents();