function GCD(a, b){

    let gcd;

    for (let i = 1; i <= a && i <= b; i++){
        
        if(a % i == 0 && b % i == 0){
            gcd = i;
        }

    }
    console.log(gcd)
}

GCD(2154, 458)
