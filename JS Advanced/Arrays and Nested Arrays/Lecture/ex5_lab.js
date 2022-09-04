function SmallestTwo(arr){


    const IDX1 = arr.indexOf(Math.min(...arr));

    const number1 = arr.splice(IDX1, 1);

    const IDX2 = arr.indexOf(Math.min(...arr));

    const number2 = arr.splice(IDX2, 1);
    const result = number1 +" "+number2;

    console.log(result);

}

SmallestTwo([3, 0, 10, 4, 7, 3])