function calorieObject(arr){
    let obj = {};
    let name;
    
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            name = arr[i];
            obj[name] = 0;
        }else{
            obj[name] = Number(arr[i]);
        }
    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])