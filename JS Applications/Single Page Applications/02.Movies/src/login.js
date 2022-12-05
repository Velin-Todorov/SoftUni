import { showHome } from "./home.js";

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget

    const form = section.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            event.target.reset()

            const data = await response.json()
            sessionStorage.setItem('authToken', data.accessToken)
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('userId', data._id);

            document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;


            Array.from(document.querySelectorAll('nav .user')).forEach(l => l.style.display = 'block');
            Array.from(document.querySelectorAll('nav .guest')).forEach(l => l.style.display = 'none');

            showHome()
        }

    });
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section)
}