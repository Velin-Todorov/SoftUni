function addItem(){

    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', '#');
    a.innerText = '[Delete]'

    li.textContent = input
    li.appendChild(a);

    ul.appendChild(li);
    document.getElementById('newItemText').value = '';

    a.addEventListener('click', Delete);


    function Delete(){
        let parent = a.parentNode;
        ul.removeChild(parent);
    }

}
