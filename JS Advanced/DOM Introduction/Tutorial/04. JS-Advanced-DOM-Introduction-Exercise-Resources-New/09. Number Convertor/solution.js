function solve() {

    let btn = document.querySelector('button')
    btn.addEventListener('click', solution)

    let selectMenu = document.getElementById('selectMenuTo');
    
    const hexadecimalOpt = document.createElement('option')
    hexadecimalOpt.setAttribute('value', 'hexadecimal')
    hexadecimalOpt.innerText = 'Hexadecimal';
    
    const binaryOpt = document.createElement('option')
    binaryOpt.setAttribute('value', 'binary')
    binaryOpt.innerText = 'Binary';

    selectMenu.appendChild(hexadecimalOpt);
    selectMenu.appendChild(binaryOpt);
    
    function solution() {

        let number = document.getElementById('input').value;
        let result = document.getElementById('result');
        
        let value = selectMenu.value;
        let resVal;

        if (value == 'hexadecimal'){
            resVal = parseInt(number).toString(16).toUpperCase()
            result.value += resVal;
            
        }else if (value == 'binary'){
            resVal = parseInt(number).toString(2);
            result.value += resVal;
        }
    }


}