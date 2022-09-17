
function PreviousDay(year, month, day){
    let today = new Date(year, month - 1, day)

    let previousDate = new Date(today)

    previousDate.setDate(previousDate.getDate() - 1)
    return `${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`

}

console.log(PreviousDay(2016, 10, 1))
