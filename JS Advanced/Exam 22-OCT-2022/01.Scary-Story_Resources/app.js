window.addEventListener("load", solve);

function solve() {
	
	let PublishButton = document.getElementById('form-btn')
	let previewList = document.getElementById('preview-list')
	
	let buttonSave = document.createElement('button')
	let buttonEdit = document.createElement('button')
	let buttonDelete = document.createElement('button')

	PublishButton.addEventListener('click', function publishing(ev) {
		let form = ev.target.parentElement.parentElement

		let firstName = form.querySelector('#first-name')

		let lastName = form.querySelector('#last-name')
		let age = form.querySelector('#age')
		let storyTitle = form.querySelector('#story-title')

		let genre = form.querySelector('#genre')
		let yourStory = form.querySelector('#story')

		let allInput = [
			firstName.value,
			lastName.value,
			age.value,
			storyTitle.value,
			genre.value,
			yourStory.value
		]
		let li = document.createElement('li')

		const test = (el) => el === '';
		if (!allInput.some(test)) {
			let article = document.createElement('article')
			li.className = 'story-info'

			article.innerHTML = `<h4>Name: ${firstName.value} ${lastName.value}</h4>
								<p>Age: ${age.value}</p>
								<p>Title: ${storyTitle.value}</p>
								<p>Genre: ${genre.value}</p>
								<p>${yourStory.value}</p>`




			buttonSave.className = 'save-btn'
			buttonEdit.className = 'edit-btn'
			buttonDelete.className = 'delete-btn'

			buttonSave.textContent = 'Save Story'
			buttonEdit.textContent = 'Edit Story'
			buttonDelete.textContent = 'Delete Story'

			li.appendChild(article)
			li.appendChild(buttonSave)
			li.appendChild(buttonEdit)
			li.appendChild(buttonDelete)

			previewList.appendChild(li);

			firstName.value = ''
			lastName.value = ''
			age.value = ''
			storyTitle.value = ''
			genre.value = ''
			yourStory.value = ''
			PublishButton.setAttribute('disabled', 'true')
		}
	})

	buttonEdit.addEventListener('click', (ev) => {
		let li = ev.target.parentElement
		let ul = ev.target.parentElement.parentElement

		let name = li.querySelector('article h4')
		let age = li.querySelectorAll('article p')[0]
		let title = li.querySelectorAll('article p')[1]
		let genre = li.querySelectorAll('article p')[2]
		let story = li.querySelectorAll('article p')[3]

		let buttonSave1  = li.querySelectorAll('button')[0]
		let buttonEdit1  = li.querySelectorAll('button')[1]
		let buttonDelete1  = li.querySelectorAll('button')[2]

		document.getElementById('first-name').value = name.textContent.split(' ')[1]
		document.getElementById('last-name').value = name.textContent.split(' ')[2]
		name.textContent = ''


		document.getElementById('age').value = age.textContent.split(' ')[1];
		age.textContent = ''

		document.getElementById('story-title').value = title.textContent.split(' ')[1]
		title.textContent = ''

		document.getElementById('genre').value = genre.textContent.split(' ')[1]
		genre.textContent = ''

		document.getElementById('story').value = story.textContent
		story.textContent = '';

		PublishButton.disabled = ''

		buttonSave1.setAttribute('disabled', 'true')
		buttonEdit1.setAttribute('disabled', 'true')
		buttonDelete1.setAttribute('disabled', 'true')

		li.remove();
	});


	buttonSave.addEventListener('click', () => {
		document.getElementById('main').innerHTML = ''
		document.getElementById('main').innerHTML = '<h1> Your scary story is saved!</h1>'

	});

	buttonDelete.addEventListener('click', (ev) => {
		let li = ev.target.parentElement
		li.remove()

		PublishButton.disabled = '';
	})

}
