function CookingNumbers(number, ...params){
    let result;
    let number_as_number = Number(number);
    result = number_as_number;

    for(let i =0; i < params.length; i++){
            result = Operations(result ,params[i])
            console.log(result);
}


    function Operations(number, operation){
        if (operation == 'chop'){
            return number / 2
        }else if (operation == 'dice'){
            return Math.sqrt(number);
        }else if (operation == 'spice'){
            return number += 1;
        }else if (operation == 'bake'){
            return number *= 3;
        }else{
            number *= 0.8
            return number.toFixed(1);
        }
    }    
}
CookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')