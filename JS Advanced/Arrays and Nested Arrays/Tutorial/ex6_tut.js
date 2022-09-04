function ListOfNames(arr){
    arr.sort(function(a, b){
        if(a > b){return 1;}
        else if (b > a){return -1;}
        else{return 0;}
    })

    for (let n of arr){
        console.log(`${arr.indexOf(n) + 1}.${n}`);
    }
}   
ListOfNames(["John", "Bob", "Christina", "Ema"])