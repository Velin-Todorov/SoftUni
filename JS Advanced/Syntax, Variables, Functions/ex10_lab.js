function AggregateElements(arr){
    let sum = 0
    let sum_inverse = 0
    let sum_concat = ''


    function Sum(item){
        sum += item;
    }

    function SumInverse(item){
        sum_inverse += 1/item;
    }

    function Concat(item){
        sum_concat += String(item);
    }

    arr.forEach(Sum);
    arr.forEach(SumInverse);
    arr.forEach(Concat);

    console.log(`${sum}\n${sum_inverse}\n${sum_concat}`)
}
