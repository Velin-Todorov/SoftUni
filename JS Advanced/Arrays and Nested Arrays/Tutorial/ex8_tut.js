function sortArrayby2Criteria(arr){
    let sortedArr3 = arr.sort().sort(function compare(a, b){
        if (a.length > b.length){return 1;}
        else if (b.length > a.length){return -1;}
    })

    console.log(sortedArr3.join('\n'));
}

