function getArticleGenerator(articles) {
    
    let showNextBtn = document.getElementsByTagName('button')[0];
    
    return () => {
        let firstElement = articles.shift();
        let article = document.querySelector('#content')

        
        if (firstElement !== undefined){
            article.innerHTML += `<article>${firstElement}</article>`;
                 
        }else{
            return;
        }
        
    }
    
}
