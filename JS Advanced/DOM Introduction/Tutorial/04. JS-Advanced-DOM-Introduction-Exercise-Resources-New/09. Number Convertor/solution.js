function solve() {

    let number = Number(document.getElementById('input'));
    let selectMenu = document.getElementById('selectMenuTo');

    const hexadecimalOpt = document.createElement('option')
    hexadecimalOpt.innerHTML = '<option selected value="hexadecimal">Hexadecimal</option>'
    
    const binaryOpt = document.createElement('option')
    binaryOpt.innerHTML = '<option selected value="binary">Binary</option>'

    selectMenu.appendChild(hexadecimalOpt);
    selectMenu.appendChild(binaryOpt);

    let selectedValue = selectMenu.value;
    console.log(selectedValue)


    if (selectedValue== 'Binary'){
        console.log(1);
    }else{
        console.log(2);
    }
}