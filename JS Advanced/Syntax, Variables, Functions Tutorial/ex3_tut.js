function SameNumbers(number){
    let number_as_str = String(number)
    let first_number = number_as_str[0]
    let result;
    let sum = 0;


    for (let i = 1; i <= number_as_str.length; i++){
        if (first_number != number_as_str[i]){
            result = false
        }else{
            result = true
        }
        sum += Number(number_as_str[i-1])
    }
    console.log(result)
    console.log(sum)
}
