function getDaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(2, 2021))
