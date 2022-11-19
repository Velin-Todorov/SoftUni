let sections = document.querySelectorAll('section').forEach(x => x.style.display = 'none')

function displayYearsSection(style) {
    document.getElementById('years').style.display = `${style}`
}

const TextToNum = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sept': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,
}


displayYearsSection('block')
let tableForYears = document.querySelectorAll('#years td.day')
tableForYears.forEach(x => x.addEventListener('click', (ev) => {
    displayMonths(ev)
    displayYearsSection('none')

}))

function displayMonths(ev) {
    document.getElementById(`year-${ev.target.innerText}`).style.display = 'block'
    
}
// Visualizing years from months
let captionsMonthlyCalendar = document.querySelectorAll('section[class="monthCalendar"] caption')

captionsMonthlyCalendar.forEach( x => x.addEventListener('click', (ev) => {
    hideMonths(ev.target.innerText)
    displayYearsSection('block')

}))

function hideMonths(year){
    document.getElementById(`year-${year}`).style.display = 'none'
}


//Visualizing days from months
let sectionsMonth = document.querySelectorAll('section.monthCalendar td')
sectionsMonth.forEach(x => {
    x.addEventListener('click', (ev) => {displayDays(ev)})
})

function displayDays(ev){
    let year = ev.target.parentElement.parentElement.parentElement.querySelector('caption').innerText
    document.getElementById(`month-${year}-${TextToNum[`${ev.target.innerText}`]}`).style.display = 'block'
    hideMonths(year)
}

let calendarDaysHeading = document.querySelectorAll('section.daysCalendar caption')
calendarDaysHeading.forEach(x => x.addEventListener('click', (ev) => {
    let text = ev.target.innerText.split(' ')
    let year = text[1]
	hideDays(ev, year)
}))

function hideDays(ev, year){
	let section = ev.target.parentElement.parentElement
	section.style.display = 'none'
	document.getElementById(`year-${year}`).style.display = 'block'

}