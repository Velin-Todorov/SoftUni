import { render, html } from '../../../node_modules/lit-html/lit-html.js'
import { repeat } from '../../../node_modules/lit-html/directives/repeat.js'


let input = document.querySelector('#searchField')
const url = 'http://localhost:3030/jsonstore/advanced/table'
const tbody = document.querySelector('tbody')

async function getItems() {

	const response = await fetch(url)
	const data = await response.json()
	
	return data
}

async function generateHTML(text) {

	let info = await getItems()

	let el = html`
		${repeat(Object.values(info), (item) => html`
			<tr class=${check(Object.values(item), text) ? 'select' : ''}>
				<td>${item.firstName} ${item.lastName}</td>
				<td>${item.email}</td>
				<td>${item.course}</td>
			</tr>
		`)}
	`
	render(el, tbody)
}

function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);
	generateHTML()
	function onClick() {
		if (input.value !== ''){
			generateHTML(input.value.toLowerCase())
			input.value = ''
		}
	}
}

function check(item, text){
	for (let i of item){
		if (i.toLowerCase().includes(text)){
			return true;
		}
	}
}

solve()

