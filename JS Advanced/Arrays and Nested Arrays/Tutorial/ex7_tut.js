function SortingNumbers(arr){
    let new_arr = []

    while (arr.length){
        let small = Math.min(...arr);
        let high = Math.max(...arr);

        arr.splice(arr.indexOf(small), 1);
        arr.splice(arr.indexOf(high), 1);

        new_arr.push(small, high);
 
    }
    return new_arr;
}