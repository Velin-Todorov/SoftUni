function IncreasingSubset(arr){
    let max_number = 0;
    let ArrCopy = []

    for (let n of arr){
        if (n >= max_number){
            ArrCopy.push(n);
            max_number = Math.max(...ArrCopy);
        }
        
    }

    return ArrCopy;
}

console.log(IncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))