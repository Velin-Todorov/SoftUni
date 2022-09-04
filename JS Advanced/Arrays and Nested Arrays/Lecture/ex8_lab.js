function ProcessOddPositions(arr){
    const new_arr = [];

    for (let i= 0; i < arr.length; i++){
        if (i % 2 != 0){
            new_arr.unshift(arr[i] * 2);
        }
    }
    return new_arr.join(' ')

}
