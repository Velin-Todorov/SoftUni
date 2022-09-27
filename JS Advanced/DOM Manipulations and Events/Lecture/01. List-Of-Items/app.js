function addItem() {
    let ul = document.getElementById('items');
    let newItemText = document.getElementById('newItemText');
    let valueToAdd = document.getElementsByTagName('input')[0].value;

    let liNew = document.createElement('li');
    liNew.textContent = newItemText.value;
    ul.appendChild(liNew);
    newItemText.value = '';
   
}