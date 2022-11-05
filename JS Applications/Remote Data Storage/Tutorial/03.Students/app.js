let submit = document.getElementById('submit')
window.addEventListener('load', loadData)

let form = document.getElementById('form')
form.addEventListener('submit', createEntry)


function checkIfEmpty(firstName, lastName, facultyNumber, grade) {

    const emptyTest = (el) => el === '' || el === null
    let arr = [firstName, lastName, facultyNumber, grade]

    if (arr.some(emptyTest)) {
        return true
    }

    return false

}

function createEntry(ev) {
    ev.preventDefault();

    let data = new FormData(form)
    
    if (checkIfEmpty(firstName, lastName, facultyNumber, grade)){
        return;
    }
    firstName = data.get('firstName').trim()
    lastName = data.get('lastName').trim()
    facultyNumber = data.get('facultyNumber').trim()
    grade = data.get('grade').trim()


    document.querySelector('#results tbody').innerHTML = "";

    const url = 'http://localhost:3030/jsonstore/collections/students'
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: grade
        })

    }).then((response) => { return response.json() })
        .catch(err => alert(err.message))

    document.querySelectorAll('[type=text]').forEach(e => e.value = "");

    loadData();

}

function loadData(){
    const url = 'http://localhost:3030/jsonstore/collections/students'

    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
        Object.entries(data).forEach(e => {
            document.querySelector('tbody').appendChild(
                createElement('tr',
                createElement('td', e[1].firstName),    
                createElement('td', e[1].lastName),    
                createElement('td', e[1].facultyNumber),    
                createElement('td', e[1].grade)))
        })
    }).catch( err => alert(err.message))

}

function createElement(type, ...data){
    let el = document.createElement(type)
    data.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            e = document.createTextNode(e)
        }
        el.appendChild(e)
    })

    return el;
}

