function CheckValidity(num1, num2, num3, num4, expression){
    if (Number.isInteger(expression)){
        return `{${num1}, ${num2}} to {${num3}, ${num4}} is valid`
    }else{
        return `{${num1}, ${num2}} to {${num3}, ${num4}} is invalid`
    }
}


function ValidityChecker(n1, n2, n3, n4){
    let x0 = 0;
    let y0 = 0;
    let x1 = n1;
    let y1 = n2;
    let x2 = n3;
    let y2 = n4;

    let expression1 = Math.sqrt((x0 - x1)**2 + (y0 - y1) ** 2);
    let expression2 = Math.sqrt((x0 - x2)**2 + (y0 - y2) ** 2);
    let expression3 = Math.sqrt((x2 - x1)**2 + (y2 - y1) ** 2);

    console.log(CheckValidity(x1, y1, x0, y0, expression1));
    console.log(CheckValidity(x2, y2, x0, y0, expression2));
    console.log(CheckValidity(x1, y1, x2, y2, expression3));
}


ValidityChecker(3, 0, 0, 4)