function loadRepos() {
	let username = document.getElementById('username')
	let repos = document.getElementById('repos')
	let button = document.getElementsByTagName('button')[0]


	button.addEventListener('click', () => {

		fetch(`https://api.github.com/users/${username.value}/repos`)
			.then((response) => response.json())
			
			.catch((error) => {
				let li = document.createElement('li')
				li.textContent = error
				repos.appendChild(li)
			})
			.then((data) => {
				if (data != "Not found"){
					for (let n of data) {
						let li = document.createElement('li')
						let a = document.createElement('a')
						a.setAttribute('href', n.html_url)
						a.textContent = n.full_name
						
						li.appendChild(a)
						repos.appendChild(li)
					}
				}
			})
			

	});

}