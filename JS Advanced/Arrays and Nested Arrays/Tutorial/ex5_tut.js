function IncreasingSubset(arr){
    let max_number = 0;
    let ArrCopy = []

    // for(let n of arr){
    //     if (n >= max_number){
    //         max_number = n
    //         ArrCopy.push(max_number);
    //     }
    // }
    return arr.reduce(compare);
}

function compare(a, b){
    return a > b
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