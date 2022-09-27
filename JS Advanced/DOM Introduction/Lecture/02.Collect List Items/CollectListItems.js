function extractText() {
    let content = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');

    for (let n of content){
        result.value += n.textContent + "\n";
    }

}

