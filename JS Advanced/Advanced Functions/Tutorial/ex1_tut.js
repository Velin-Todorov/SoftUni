function sortArray(arr, command){
    
    let sortedArray = [];

    if (command == 'asc'){

        sortedArray = arr.sort((a, b) => {return a - b});
    
    }else if (command == 'desc'){
        
        sortedArray = arr.sort((a, b) => {return b - a});

    }
    
   return sortedArray;

}

console.log(sortArray([10, 8, 5, 7, 9, 6], 'desc'));


