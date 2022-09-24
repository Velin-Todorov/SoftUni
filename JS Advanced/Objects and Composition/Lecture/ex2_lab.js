function townPopulation(arr){
    
    const cityPopulation = {};

    for (let n of arr){
        let data = n.split(" <-> ");
        let town = data[0];
        let population = parseInt(data[1]);

        if (cityPopulation.hasOwnProperty(town)){
            cityPopulation[town] += population;
        }else{
            cityPopulation[town] = population;
        
        }
    }

    for (const key in cityPopulation){
        console.log(`${key} : ${cityPopulation[key]}`);
    }
}

townPopulation(['Sofia <-> 1300000',
'Sofia <-> 100000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])