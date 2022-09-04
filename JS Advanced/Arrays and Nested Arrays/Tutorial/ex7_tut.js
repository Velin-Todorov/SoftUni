function SortingNumbers(arr){
    let new_arr = []

    let sortedArr = arr.sort((a, b) => a - b);
    let bigNumbers = (sortedArr.splice(sortedArr.length / 2, sortedArr.length - 1)).reverse();

    for (let i = 0; i < bigNumbers.length; i++){
        new_arr.push(sortedArr[i], bigNumbers[i]);
    }
    return new_arr;
}