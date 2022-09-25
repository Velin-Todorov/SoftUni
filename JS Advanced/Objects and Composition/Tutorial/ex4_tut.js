function heroicInventory(arr){
    
    let result = [];

    for (let n of arr){
       let obj = {}; 
        let [name, level, items] = n.split('/ ')
        level = Number(level);
        items = items ? items.split(', ') : [];
        name = name.trim();
        
        obj.name = name;
        obj.level = level;
        obj.items = items;

        result.push(obj);
    }

    return JSON.stringify(result)
}


console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))