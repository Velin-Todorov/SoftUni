function Pattern(number1=5){
    let result = ''

    for (let i= 0; i < number1; i++){
        result += '* '
        for (let z = 1; z < number1; z++){
            result += '* '
        }
        result += '\n'
    }  

    console.log(result)
} 

Pattern()