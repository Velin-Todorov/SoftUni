function TimeToWalk(stepsToUni, footprintMeter, speed){

    let TotalDistance = stepsToUni * footprintMeter
    let totalTime = 0;

    let breakTime = TotalDistance / 500;

    totalTime += breakTime;

    let MetersPerMin = speed * 16.6666667;

    let TimeToUni = Math.floor(TotalDistance / MetersPerMin);

    totalTime += TimeToUni;
    
    TimeInSeconds = totalTime * 60;

    let mins = Math.floor(TimeInSeconds / 60); //mins

    let hours = Math.floor(TimeInSeconds / 3600); //hours
    let seconds = Math.round(TimeInSeconds % 60); //secs

    if (mins > 60){
        let additional_hours = mins / 60 | 0;
        hours += additional_hours;

        mins -= (additional_hours * 60)
    }
    
    console.log((hours < 10 ? "0" : "") + hours + ":" + (mins < 10 ? "0" : "") + mins + ":" + (seconds < 10 ? "0" : "") + seconds)
}

TimeToWalk(4200, 0.60, 5)