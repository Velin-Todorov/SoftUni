function storeCatalogue(arr){
    let obj = {};
    let result = '';

    for (let n of arr){
        let [name, price] = n.split(' : ');
        let key = name.charAt(0);

        if (!obj.hasOwnProperty(key)){
            let productObj = {};
            productObj[name] = price
            obj[key] = productObj;

        }else{
            let valueObj = obj[key];
            valueObj[name] = price;
        }   
    }
    const sorted = Object.keys(obj)
    .sort()
    .reduce((accumulator, key) => {accumulator[key] = obj[key]
    
        return accumulator
    }, {})
    
    for (const key in sorted){
        let value = sorted[key];

        const sortedValue = Object.keys(value)
        .sort()
        .reduce((accumulator, z) => {accumulator[z] = +value[z]
            return accumulator
        }, {})
        sorted[key] = sortedValue;
        result += `${key}\n`

        for (const key in sortedValue){
            result += ` ${key}: ${sortedValue[key]}\n`
        }

    }

    console.log(result)
}

    