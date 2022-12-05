import { showHome } from "./home.js";

let main;
let section

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget

    const form = section.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let formData = new FormData(form)
        let email = formData.get('email')
        let password = formData.get('password')
        let rePassword = formData.get('repeatPassword')

        if (email.length < 3 || password !== rePassword){
            return alert('Wrong data')
        }

        if (email == '' || password == '' || rePassword == ''){
            return alert('All fields are mandatory')
        }

        const url = 'http://localhost:3030/users/register'

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if (response.ok){
            event.target.reset();

            const data = await response.json()
            localStorage.setItem('authToken', data.accessToken);
            localStorage.setItem('email', data.email);
            localStorage.setItem('userId', data._id);

            Array.from(document.querySelectorAll('.nav-item-user')).forEach(x => x.style.display = 'block')
            Array.from(document.querySelectorAll('.nav-item-guest')).forEach(x => x.style.display = 'none')

            showHome()
        }
    })
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section)
}