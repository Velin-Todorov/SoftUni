function LowestPrices(arr){
    let result = '';
    let obj = {};

    for (let n of arr){
        let [name, product, price] = n.split(' | ')

        price = Number(price);

        if (!obj.hasOwnProperty(product)){
            obj[product] = {name, price};
        }else{
            if(price < obj[product].price){
                obj[product] = {name, price};
            }
        }
    }

    for (const key in obj){
        let productObj = obj[key];

        result += `${key} -> ${productObj.price} (${productObj.name})\n`;
    }
    
    console.log(result)
}