import {showDashboard} from './dashboard.js'

let main;
let section;


export function setupCreate(mainTarget, sectionTarget){
    main = mainTarget,
    section = sectionTarget

    let form = section.querySelector('form')

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let formData = new FormData(form)
        let title = formData.get('title')
        let description = formData.get('description')
        let img = formData.get('imageURL')

        if (title.length < 6){
            return alert('Title too short')
        }if (description.length < 10){
            return alert('Text too short')
        }if (img.length < 5){
            return alert('URL too short')
        }

        const url = 'http://localhost:3030/data/ideas'
        const response = await fetch(url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 
                'X-Authorization': localStorage.getItem('authToken')
            },
            body: JSON.stringify({
                title, 
                description,
                img
            })
        })

        if (response.ok){
            form.reset()
            showDashboard()
        }

    })

}

export function showCreate(id){
    main.innerHTML = ''
    main.appendChild(section)
}