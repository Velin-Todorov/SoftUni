function editElement(element, match, replacer) {
    
    let el = element.textContent
    let rgx = new RegExp(match, 'g')
    let edited = el.replace(rgx, replacer)
    element.textContent = edited;
}