function deleteByEmail() {
    
    let emailToBeDeleted = document.querySelector('input').value
    let table = document.querySelectorAll('tr td:nth-child(2)');
    let result = document.getElementById('result');
    let match = false;

    for (let n of table){
        if (emailToBeDeleted == n.textContent){
            let parent = n.parentNode;
            document.querySelector('tbody').removeChild(parent);
            match = true;
            break;
        }
    }
    if (match){
        result.textContent = 'Deleted.'
    }else{
        result.textContent = 'Not found.'
    }
}