function solve(){

    let recipes = {
            apple: {carbohydrate: 1, flavour: 2},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
            };

    let stock = {
                protein: 0,
                carbohydrate: 0,
                fat: 0,
                flavour: 0
                };

    function manager(instruction){
        let data = instruction.split(' ');
        let instruct = data[0];
        let quantity = Number(data[2]); 
        let currentKey = "";

        if (instruct == 'restock'){
            let microelement = data[1];
            
            if (stock.hasOwnProperty(microelement)){
                stock[microelement] += quantity;
                return "Success"; 
            }

        }else if (instruct == 'prepare'){
            let recipe = recipes[data[1]];
            let canBePrepared = false;

            for (const key in recipe){
                let needed = recipe[key] * quantity
        
                if (needed  <=  stock[key]){
                    stock[key] -= needed;

                    if (stock[key] < 0){
                        stock[key] = 0;
                    }

                    canBePrepared = true;
                }else{
                    currentKey = key;
                    canBePrepared = false;

                }

                if (!canBePrepared){
                    break;
                }
            
            }
            
            if (canBePrepared){
                return "Success";
            }else{
                return `Error: not enough ${currentKey} in stock`;
            }

        }else if (instruct == "report") {
            let result = "";

            for (const key in stock){
                result += `${key}=${stock[key]} `
            }

            return result.trim();
        }
        
        

    }


    return manager;
}


let manager = solve();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"))
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
