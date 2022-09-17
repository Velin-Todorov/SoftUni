function RoadRadar(kmph, area){
    let difference = 0;
    let limit = 0;
    let status;


    function GetStatus(speed){
        if (speed <= 20){
            return 'speeding'
        }else if (speed <= 40){
            return 'excessive speeding'
        }else{
            return 'reckless driving'
        }
    }
    

    if (area == 'city'){
        limit = 50;
        
        if (kmph <= limit){
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);
        }
        else{
            difference = Math.abs(limit - kmph);
            status = GetStatus(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }

    }else if (area == 'interstate'){
        limit = 90;

        if (kmph <= limit){
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);
        }
        else{
            difference = Math.abs(limit - kmph);
            status = GetStatus(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }else if (area == 'motorway'){
        limit = 130;

        if (kmph <= limit){
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);
        }else{
            difference = Math.abs(limit - kmph);
            status = GetStatus(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            
        }

    }else{
        limit = 20;

        if (kmph <= limit){
            console.log(`Driving ${kmph} km/h in a ${limit} zone`)
        }else{
            difference = Math.abs(limit - kmph);
            status = GetStatus(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }    

}

RoadRadar(21, 'residential')

