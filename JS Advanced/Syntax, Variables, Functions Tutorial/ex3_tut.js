function SameNumbers(number){
    let numberAsString = String(number);
    let firstElement = numberAsString[0];
    let set = new Set(numberAsString);
    let arrayNumber = Array.from(numberAsString);    

    let result;

    if (firstElement == [...set.values()]){
        result = true;
    }else{
        result = false;
    }



    const arrayOfInts = arrayNumber.map(x => Number(x));
    const reducer = (accumulator, curr) => accumulator + curr;
    
    console.log(result);
    console.log(arrayOfInts.reduce(reducer, 0));
    
}

SameNumbers(2222232)