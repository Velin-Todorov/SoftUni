function townsToJSON(arr){
    let obj = {};
    let result = [];    
    let keys = arr[0].split(' | ');

    let townKey = keys[0].replace('|', '').trim();
    let latKey = keys[1].replace('|', '').trim();
    let longKey = keys[2].replace('|', '').trim();

    for (i = 1; i < arr.length; i++){
            let currentArr = arr[i].split(' | ')
            let town = currentArr[0].replace('|', '').trim();
            let lat = parseFloat(currentArr[1]).toFixed(2);
            let long = parseFloat(currentArr[2].replace('|', '').trim()).toFixed(2);

            obj[townKey] = town;
            obj[latKey] = +lat;
            obj[longKey] = +long;

            result.push(obj);
            obj = {};
    }

    return JSON.stringify(result)    
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])