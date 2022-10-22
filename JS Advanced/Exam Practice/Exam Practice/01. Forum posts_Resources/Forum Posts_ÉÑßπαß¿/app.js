window.addEventListener("load", solve);

function solve() {
	let title = document.getElementById('post-title')
	let category = document.getElementById('post-category')
	let content = document.getElementById('post-content')
	let reviewList = document.getElementById('review-list');
	let publishList = document.getElementById('published-list');


	let publishButton = document.getElementById('publish-btn')

	let buttonClear = document.getElementById('clear-btn')


	publishButton.addEventListener('click', gettingInput);

	let article = document.createElement('article')
	function gettingInput() {
		if (title.value && category.value && content.value) {

			let h4 = document.createElement('h4')
			let pCategory = document.createElement('p')
			let pContent = document.createElement('p')

			let buttonEdit = document.createElement('button')
			let buttonApprove = document.createElement('button')

			let li = document.createElement('li');

			h4.textContent = title.value
			pCategory.textContent = `Category: ${category.value}`
			pContent.textContent = `Content: ${content.value}`

			buttonEdit.textContent = 'Edit'
			buttonApprove.textContent = 'Approve';

			buttonEdit.setAttribute('class', 'action-btn edit')
			buttonApprove.setAttribute('class', 'action-btn approve')

			li.setAttribute('class', 'rpost')
			article.appendChild(h4)
			article.appendChild(pCategory)
			article.appendChild(pContent)

			li.appendChild(article)
			li.appendChild(buttonEdit)
			li.appendChild(buttonApprove)

			reviewList.appendChild(li);

			title.value = ''
			category.value = ''
			content.value = ''
		}
	}

	function edit() {
		let parent = event.target.parentElement
		let heading = parent.querySelector('h4').textContent;
		let cat = parent.querySelectorAll('article p')[0];
		let question = parent.querySelectorAll('article p')[1];

		let catRegex = /(?<=Category: )\S+$/g
		let questionRegex = /(?<=Content: )\S+$/g

		title.value = heading;
		category.value = cat.match(catRegex)
		content.value = question.match(questionRegex)
		reviewList.innerHTML = ''

	}


	function approving() {
		let li = Array.from(reviewList.children);

		for (let n of li) {
			let button1 = document.getElementsByClassName('action-btn edit')[0]
			let button2 = document.getElementsByClassName('action-btn approve')[0]

			n.removeChild(button1)
			n.removeChild(button2)

			publishList.appendChild(n);
		}

		reviewList.innerHTML = ''

	}

	buttonClear.addEventListener('click', clearing);

	function clearing() {
		publishList.innerHTML = '';
	}

}
