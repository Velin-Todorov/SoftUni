function generateReport() {
    let checkedHeaders = document.querySelectorAll('tr th')
    let result = [];
    let table = document.querySelectorAll('tbody tr');
    let checkedColumns = [];
    let checkedIndexes = [];
    
    console.log(table);

    for (let n of checkedHeaders) {
        let el = n.querySelector('input');

        if (el.checked) {
            let column = el.getAttribute('name');
            checkedColumns.push(column)
            checkedIndexes.push(Array.from(checkedHeaders).indexOf(n))
        }
    }


    for (let n of table){
        let obj = {}
        let el = n.querySelectorAll('td')
        for (let i = 0; i < checkedIndexes.length; i++){
            obj[checkedColumns[i]] = el[checkedIndexes[i]].textContent;
        }

        result.push(obj);        
    }

    let output = document.getElementById('output')
    output.textContent = JSON.stringify(result)
}