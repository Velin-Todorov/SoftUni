function cars(arr){

    function CarCreation(){
        let objCars = {};

        for (let n of arr){
            let data = n.split(' ');

            if (data[0] == 'create' && data.length == 2){
                let name = data[1];
                objCars[name] = {};

            }else if(data[0] == 'create' && data.length > 2){
                let name = data[1]
                let parentObj = data[3];
                objCars[name] = Object.create(objCars[parentObj]);
        
            }else if(data[0] == 'set'){
                let name = data[1];
                let key = data[2];
                let value = data[3];

                objCars[name][key] = value;
        
            }else if (data[0] == 'print'){
                let name = data[1];
                let objTemp = objCars[name];
                let inheritedProps = Object.getPrototypeOf(objTemp); //object
                let ownProperties = Object.getOwnPropertyNames(objTemp) //list
                let lst = [];

                if (ownProperties){
                    for (let n of ownProperties){
                        lst.push(`${n}:${objTemp[n]}`)
                    }

                }

                if (inheritedProps){
                    for (const key in inheritedProps){
                        lst.push(`${key}:${objTemp[key]}`)
                    }
    
                }
          
                console.log(lst.join(','));
            }
        }
    }
   return  CarCreation();

}

