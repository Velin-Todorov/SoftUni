function createAssemblyLine(){

    function hasClima(obj){
        obj['temp'] = 21
        obj['tempSettings'] = 21
        obj['adjustTemp'] = (() => {if (obj.temp < obj.tempSettings){
                obj.temp += 1
            } 
            else if (obj.temp > obj.tempSettings){
                obj.temp -= 1}
            }
            )

    }

    function hasAudio(obj){
        obj['currentTrack'] = {}
        obj['nowPlaying'] = (() => {if (obj.currentTrack !== null) {console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)}})
    }

    function hasParktronic(obj){
        obj['checkDistance'] = ((distance) => {if (distance < 0.1){console.log("Beep! Beep! Beep!")} 
                                              else if (0.1 <= distance < 0.25){console.log("Beep! Beep!")} 
                                              else if (0.25 <= distance < 0.5){console.log("Beep!")}
                                              else{console.log('')}});
        
        


    }

    let result = {hasClima, hasAudio, hasParktronic};

    return result;    
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);