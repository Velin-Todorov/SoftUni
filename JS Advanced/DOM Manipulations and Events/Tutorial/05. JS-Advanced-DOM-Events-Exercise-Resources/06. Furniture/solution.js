function solve() {

	let input = document.getElementsByTagName('textarea')[0];
	let generateButton = document.getElementsByTagName('button')[0];
	let buyButton = document.getElementsByTagName('button')[1];

	let table = document.querySelector('tbody');
	let bought = [];
	let totalPrice = 0;
	let avgDecFactor = 0;
	let DecFactor = 0;

	generateButton.addEventListener('click', add)

	function add() {
		let items = JSON.parse(input.value);

		for (let n of items) {
			let newTableRow = document.createElement('tr')

			let newTdImg = document.createElement('td')
			let newTdProductName = document.createElement('td')
			let newTdProductPrice = document.createElement('td')
			let newTdFactor = document.createElement('td')
			let newTdBox = document.createElement('td');

			let img = document.createElement('img')

			let productName = document.createElement('p');
			let productPrice = document.createElement('p');
			let productFactor = document.createElement('p');
			let checkBox = document.createElement('input');

			img.setAttribute('src', n.img)
			checkBox.setAttribute('type', 'checkbox');

			productName.innerText = n['name']
			productPrice.innerText = n['price']
			productFactor.innerText = n['decFactor']


			newTdImg.appendChild(img)
			newTableRow.appendChild(newTdImg);

			newTdProductName.appendChild(productName)
			newTableRow.appendChild(newTdProductName);

			newTdProductPrice.appendChild(productPrice)
			newTableRow.appendChild(newTdProductPrice);

			newTdFactor.appendChild(productFactor)
			newTableRow.appendChild(newTdFactor);

			newTdBox.appendChild(checkBox);

			newTableRow.appendChild(newTdImg);
			newTableRow.appendChild(newTdProductName);
			newTableRow.appendChild(newTdProductPrice);
			newTableRow.appendChild(newTdFactor);
			newTableRow.appendChild(newTdBox);

			table.appendChild(newTableRow);

		}

	}


	buyButton.addEventListener('click', buy)


	function buy() {
		let output = document.getElementsByTagName('textarea')[1];

		let checkedBox = document.querySelectorAll('input')
		for (let n of checkedBox) {
			if (n.checked) {
				let parent = n.parentNode.parentNode;
				bought.push(parent.childNodes[1].querySelector('p').textContent)
				totalPrice += Number(parent.childNodes[2].querySelector('p').textContent)
				DecFactor += Number(parent.childNodes[3].querySelector('p').textContent)

			}
		}
		avgDecFactor = DecFactor / bought.length;
		output.value = `Bought furniture: ${bought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`

	}

}