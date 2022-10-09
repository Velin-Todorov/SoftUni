function subSum(arr, startIndx, endIndx){

    if (Array.isArray(arr) == false){

        return NaN;
    }

    if (startIndx < 0){startIndx = 0};
    if (endIndx > arr.length){endIndx = arr.length - 1}

    return arr
    .slice(startIndx, endIndx + 1)
    .map(Number)
    .reduce((acc, x) => acc+x, 0);

}