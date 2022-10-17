function addItem() {
  
    let newtextItem = document.getElementById('newItemText').value;
    let newValueItem = document.getElementById('newItemValue').value;
    let selectMenu = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = newtextItem;
    option.value = newValueItem;

    selectMenu.appendChild(option);

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''


}