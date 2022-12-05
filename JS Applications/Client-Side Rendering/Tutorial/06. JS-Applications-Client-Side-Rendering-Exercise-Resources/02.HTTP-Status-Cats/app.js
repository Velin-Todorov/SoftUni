import {cats} from './catSeeder.js'
import {render, html} from '../../../node_modules/lit-html/lit-html.js'
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js'

let list = document.querySelector('#allCats')
let ul = document.createElement('ul')
list.appendChild(ul)

function createHTML(cat){
    let catCard = html`
    <ul>
        <li>
            <img src=${'./images/' + cat.imageLocation +'.jpg'} width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${showDetails}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
        </li>
    </ul>`
    function showDetails(ev){
        let status = document.querySelector(`.status`)
        let catInfo = document.getElementById(`${cat.id}`)

        if(catInfo.style.display == 'none'){
            catInfo.style.display = 'block'
            ev.target.textContent = 'Hide status code'
        }else{
            catInfo.style.display = 'none'
            ev.target.textContent = 'Show status code'
        }
    }

    return catCard
}

render(cats.map(createHTML), ul)
