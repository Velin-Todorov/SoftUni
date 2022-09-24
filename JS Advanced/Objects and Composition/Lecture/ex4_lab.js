function ObjectFactory(library, orders){
   let result = [];

    for (let obj of orders){
        let keys = Object.keys(obj);
        let templateKey = String(keys[0]);
        let templateKeyValue = obj[templateKey];
        let partsKey = keys[1];
        let partsKeyArray = obj[partsKey];
        
        for (let key of partsKeyArray){
            if (library.hasOwnProperty(key)){
                 templateKeyValue[String(key)] = library[key];
            }
            
        }
        result.push(templateKeyValue);

    }

    return result;
}




