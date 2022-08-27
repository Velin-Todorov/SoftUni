
function PreviousDay(year, month, day){
    let date = new Date(year, month, day)
    const previous = new Date(date.getTime());
    console.log(previous.setDate(date.getDate() - 1));
}

PreviousDay(2016, 9, 30)
