function BiggestElement(matrix){
    const max_arr = []

    for (let n of matrix){
        max_arr.push(Math.max(...n));
    }

    return Math.max(...max_arr);
}

