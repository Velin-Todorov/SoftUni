function addItem() {
    let ul = document.getElementById("items");
    let newItemText = document.getElementById("newItemText");
    let li = document.createElement('li');
    li.textContent = newItemText.value; 
    ul.appendChild(li);

    newItemText.value = '';

    let anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = '[Delete]';
    li.appendChild(anchor);

    anchor.addEventListener('click', Delete);

    function Delete(){
        ul.removeChild(li);
    }

}