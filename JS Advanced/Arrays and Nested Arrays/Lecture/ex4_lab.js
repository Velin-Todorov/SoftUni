function NegativePositive(arr){
    const new_arr = [];

    for (let i = 0; i < arr.length; i++){
            if (arr[i] < 0){
                new_arr.unshift(arr[i]);
            }
            else  if (arr[i] >= 0){
                new_arr.push(arr[i]);
            }
    }

    console.log(new_arr.join('\n'));
}   

