function extract(content) {

    let para = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = para.matchAll(pattern);

    let matches = [];

    for (let text of result){
        matches.push(text[1]);
    }

    console.log(matches.join('; '));
}

extract('content');