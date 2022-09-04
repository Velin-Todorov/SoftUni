function WordUpper(string){
    const re = /[A-Za-z]\w+/g;
    let array_words= string.match(re);
    let result;
    
    for (let i = 0; i < array_words.length; i++){
        array_words[i] = array_words[i].toUpperCase()
    }
    
    console.log(array_words.join(', '))
}   

WordUpper('Hello')

