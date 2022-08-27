function Fruit(fruit, weight, price){
    let kg = weight / 1000;
    let price_for_quant = kg * price;

    console.log(`I need $${price_for_quant.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);

}   

Fruit('orange', 2500, 1.80)
