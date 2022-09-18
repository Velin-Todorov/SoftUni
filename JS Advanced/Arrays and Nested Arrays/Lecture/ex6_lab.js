function BiggerHalf(arr){

    arr.sort((a, b) => a - b);
    const half = arr.length / 2 | 0;
    
    return arr.slice(half);
}

BiggerHalf([3, 19, 14, 7, 2, 19, 6])
