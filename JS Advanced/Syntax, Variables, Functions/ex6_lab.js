function SumOfNumbers(n, m){

    let number_n = Number(n);
    let number_m = Number(m);
    let result = 0;

    for (let i = number_n; i <= number_m; i++){
        result += i
    }
    console.log(result)
}

SumOfNumbers('-8', '20')
