function LowestPrices(arr){
    let result = '';
    let names = [];
    let arrOfObjs = [];

    let  smallest_price = Infinity;

    for (let n of arr){
    
        let [name, product, price] = n.split(' | ')
        names.push(name);
        arrOfObjs.push({name, productPrice: [product, price]})
        
        if ()
    
        
    }

    

LowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])