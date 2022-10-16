function solve() {

	let buttons = Array.from(document.querySelectorAll('div[class="product-add"] button'));
	let total = 0;
	let textAreatext = [];
	let textArea = document.querySelector('textarea');
	let checkout = document.getElementsByClassName('checkout')[0];
	let productsBought = {};

	buttons.forEach((n) => { n.addEventListener('click', add) })
	checkout.addEventListener('click', checkOut)

	function add(ev) {
		let parentDiv = ev.target.parentElement.parentElement
		let price = parentDiv.querySelector('div [class="product-line-price"]');
		let details = parentDiv.querySelector('div [class="product-add"]').textContent;
		let name = parentDiv.querySelector('div [class="product-title"]').textContent;
		textArea.textContent += `Added ${name} for ${Number(price.textContent).toFixed(2)} to the cart.\n`
		total += Number(price.textContent)

		if (!productsBought.hasOwnProperty(name)) {
			productsBought[name] = Number(price.textContent);
		} else {
			productsBought[name] += Number(price.textContent)
		}

	}


	function checkOut(ev) {
		let products = Object.keys(productsBought);
		let result = `You bought ${products.join(', ')} for ${total.toFixed(2)}.`
		textArea.textContent += result;

		let buttons = Array.from(document.querySelectorAll('button'))
		buttons.forEach((n) => {
			n.removeEventListener('click', add),
			n.removeEventListener('click', checkOut)
		});
	}

}