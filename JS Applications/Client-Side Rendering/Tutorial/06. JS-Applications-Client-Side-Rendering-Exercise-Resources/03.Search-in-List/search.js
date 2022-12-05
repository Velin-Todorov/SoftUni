import { towns } from './towns.js'
import { render, html } from '../../../node_modules/lit-html/lit-html.js'
import { repeat} from '../../../node_modules/lit-html/directives/repeat.js'

let searchBtn = document.querySelector('button')

function search() {
   addTowns()
   searchBtn.addEventListener('click', searchTown)
}

function addTowns(match) {
   let el = html`
   <ul>
   ${
      repeat(towns, (town) => html`
      <li class=${town.includes(match) ? 'active' : ''}>${town}</li>`)
    }
   </ul>`
   render(el, document.querySelector('#towns'))
}

function searchTown(){
   let input = document.querySelector('#searchText').value
   
   if(input !== ''){
      addTowns(input)
      getResult()
   }
}
function getResult(){
   let els = Array.from(document.querySelectorAll('.active'))
   if (els != []){
      let string = `${els.length} matches found`
      document.querySelector('#result').textContent = string

   }
}

search()
