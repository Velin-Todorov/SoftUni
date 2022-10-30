function lockedProfile() {
    let main = document.getElementById('main')


    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(data => { creattingProfiles(data) })
        .catch(error => console.log(`Error: ${error}`))

    function creattingProfiles(data) {
        data = JSON.parse(JSON.stringify(data))
        for (const key in data) {
            let div = document.createElement('div')
            div.className = 'profile'

            div.innerHTML = `<img src="./iconProfile2.png" class="userIcon"/>
                             <label>Lock</label>
                             <input type="radio" name="${key}Locked" value="lock" checked>
                             <label>Unlock</label>
                             <input type="radio" name="${key}Locked" value="unlock"><br>
                             <hr>
                             <label>Username</label>
				             <input type="text" name="${key}Username" value="${data[key].username}" disabled readonly />
                             `

            let divUser = document.createElement('div')
            divUser.id = key
            divUser.style.display = 'none'
            divUser.innerHTML += `
                <hr>
                <label>Email:</label>
				<input type="email" name="${key}Email" value="${data[key].email}" disabled readonly />
                <label>Age:</label>
				<input type="text" name="${key}Age" value="${data[key].age}" disabled readonly />
                </div>
                `
            div.appendChild(divUser)
            div.innerHTML += `</div>`
            let button = document.createElement('button')
            button.textContent = 'Show More'
            button.addEventListener('click', display)

            div.appendChild(button);

            main.appendChild(div)
        }

    }

    function display(ev) {
        let parent = ev.target.parentElement.childNodes
        parent[4].addEventListener('change', () => {
            if (parent[17].style.display == 'block') {
                parent[17].style.display = 'none'
            }
            parent[18].textContent = 'Show more'
        })

        if (parent[8].checked) {
            parent[17].style.display = 'block'
            if (ev.target.textContent == 'Hide it'){
                parent[17].style.display = 'none'
                ev.target.textContent = 'Show more'
                parent[8].checked = false
                parent[4].checked = true
            }else{
                parent[18].textContent = 'Hide it'

            }
        }

    }
}



