function argumentInfo(...args){
    
    let obj = {};
    let objCount = {};

    for (let n of args){

        if (!objCount.hasOwnProperty(typeof n)){
            objCount[typeof n] = 1;
        }
        else{
            objCount[typeof n] += 1;
        }
    }

    for (let n of args){
        console.log(`${typeof n}: ${n}`);
    }
    
    const sorted = Object.entries(objCount).sort(([,a], [,b]) => a - b).reduce(
        (r, [k, v]) => ({...r, [k]: v}), {});

    

    let buff ="";

    for (let [k, v] of Object.entries(objCount)){
        buff += `${k} = ${v}\n`
    }
    
    console.log(buff);
}


argumentInfo({ name: 'bob'}, 3.333, 9.999)
