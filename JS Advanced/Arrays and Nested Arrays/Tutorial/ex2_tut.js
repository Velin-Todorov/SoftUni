function EveryNthElement(arr, number){

    const result = [];

    for (let i = 0; i < arr.length; i+= number){
        result.push(arr [i]);
    }

    return result;
}
