function addItem() {
    let ul = document.getElementById('items')
    let input = document.getElementById('newItemText').value;
    
    let newEl = document.createElement('li')
    newEl.textContent += input
    ul.appendChild(newEl);
    document.getElementById('newItemText').value = ''
   
}