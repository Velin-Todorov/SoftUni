function WordUpper(string){
    let array_words= string.match(/\w+/g);
    
    for (let i = 0; i < array_words.length; i++){
        array_words[i] = array_words[i].toUpperCase()
    }
    
    console.log(array_words.join(', '))
}   

WordUpper('Hello')

