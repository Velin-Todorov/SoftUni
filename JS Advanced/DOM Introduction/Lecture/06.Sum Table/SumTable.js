function sumTable() {
    let table = document.querySelectorAll('tr')
    let sum = document.getElementById('sum');
    let total = 0; 
    
    for (let i = 1; i < table.length; i++){
        
        let rows = table[i];
        total += Number(rows.children[1].textContent);

    }

    
    
    sum.textContent = total;
}

