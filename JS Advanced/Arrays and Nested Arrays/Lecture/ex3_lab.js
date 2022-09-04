function SumFirstLast(arr){
    
    if (arr.length == 1){
        return arr[0]
    }

    const LastElement = arr.pop();
    const FirstElement = arr.shift();

    const sum = Number(LastElement) + Number(FirstElement);

    return sum;
}

console.log(SumFirstLast(['20']))