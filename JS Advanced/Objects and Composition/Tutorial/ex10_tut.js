function solve(){
     let result = {};

    function fighter(name){
        let fighterObj = {};
        fighterObj['name'] = name;
        fighterObj.health = 100;
        fighterObj.stamina = 100;

        fighterObj.fight = (() => {fighterObj.stamina -= 1; console.log(`${fighterObj.name} slashes at the foe!`)});

        return fighterObj
    }

    function mage(name){
        let mageObj = {};
        mageObj['name'] = name;
        mageObj.health = 100;
        mageObj.mana = 100;

        mageObj.cast = ((spell) =>{mageObj.mana -= 1; console.log(`${mageObj.name} cast ${spell}`);});
        return mageObj;
    }

    result = {fighter, mage}

    return result;

}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);