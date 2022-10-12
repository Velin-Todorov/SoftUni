function colorize() {
    let table = document.querySelectorAll("tr");
    
    for (let i = 1; i < table.length; i+=2){
        let el = table[i];
        
        el.style.backgroundColor = 'teal'
    }
    
}