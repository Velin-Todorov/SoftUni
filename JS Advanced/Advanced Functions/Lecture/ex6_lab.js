function listProcessor(arr){
    
    let collection = [];
    let innerObjFunc = innerObj();

    for (let n of arr){
        let data = n.split(' ');
        let command = data[0];
        let closureCommand = innerObjFunc[command]
        
        if (data.length > 1){
            let text = data[1];
            closureCommand(text);
        }else{
            closureCommand();
        }
        
    }

     function innerObj(){
        let obj = {
            collection: collection,
            add: (el) => obj.collection.push(el),
            remove: (el) => {while (obj.collection.includes(el)){
                                        let idx = collection.indexOf(el);
                                        obj.collection.splice(idx, 1);
                                        }},
            print: () => console.log(obj.collection.join(','))
        }

        return obj;
    }
    
    return innerObj;
}       

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])
