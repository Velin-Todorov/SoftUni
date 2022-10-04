function getFibonator(){
    
    let number = [0];
    let nextNumber = 0;
    let index = 0;

    function currentNumber(){
        while (true) {
            nextNumber = number[index] + number[index - 1]

            if (number.length === 1){
                nextNumber = 1;
            }

            number.push(nextNumber);
            index++;
            
            return number[number.length - 1];
        }       
        
    }

   return currentNumber;

}

