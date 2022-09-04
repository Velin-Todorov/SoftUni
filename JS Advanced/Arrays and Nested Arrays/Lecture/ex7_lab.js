function PieceOfPie(arr, first_flavor, second_flavor){
    const new_arr = arr.slice(arr.indexOf(first_flavor), arr.indexOf(second_flavor) + 1);

    return new_arr;
}


