function AddRemoveElements(arr){
    let numbers = [];
    
    for (let i = 0; i < arr.length; i++){
         if (arr[i] === 'add'){
            numbers[i] = i + 1;

         }else if (arr[i] === 'remove'){
            if (numbers.length){
                numbers.pop();
            }
            
         }
    }
    if (!numbers.length){
        console.log('Empty');
    }

    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] !== undefined){
            console.log(numbers[i]);
        }
    }
}

AddRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add'])

