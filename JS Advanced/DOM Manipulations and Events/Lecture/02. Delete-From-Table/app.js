function deleteByEmail() {
    let emailToBeDeleted = document.getElementsByTagName('input')[0].value; 
    let result = document.getElementById('result'); 
    let tableBody = document.querySelectorAll('tr td:nth-child(2)');
    let deleted = false;


    for (let n of tableBody){
        if (n.textContent == emailToBeDeleted){
            let row = n.parentNode;
            row.parentNode.removeChild(row);
            
            deleted =true;            
        }
    }
    
    if (deleted){
        result.textContent = 'Deleted';
    }else{
        result.textContent = 'Not found.';
    }

}