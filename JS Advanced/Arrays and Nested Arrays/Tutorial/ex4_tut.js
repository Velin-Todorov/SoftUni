function RotateArray(arr, number){
    for (let i = 0; i < number; i++){
        x = arr.pop();
        arr.unshift(x);
    }
    console.log(arr.join(' '));
}