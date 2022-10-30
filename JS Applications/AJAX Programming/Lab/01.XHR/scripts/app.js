function loadRepos() {
	let res =  document.getElementById('res')
	let button = document.getElementsByTagName('button')[0]

	button.addEventListener('click', () => {
		let url = 'https://api.github.com/users/testnakov/repos';
		const httpRequest = new XMLHttpRequest();

		httpRequest.addEventListener('readystatechange', () =>{
			if (httpRequest.readyState == 4 && httpRequest.status == 200){
				res.textContent = httpRequest.responseText;
			}
		});
		httpRequest.open('GET', url)
		httpRequest.send();
	});

}