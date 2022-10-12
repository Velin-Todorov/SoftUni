function extractText() {
    let ul = document.querySelectorAll('#items li')
    let result = document.getElementById('result')
    
    for (let n of ul){
        result.textContent += n.textContent + '\n';
    }

}

