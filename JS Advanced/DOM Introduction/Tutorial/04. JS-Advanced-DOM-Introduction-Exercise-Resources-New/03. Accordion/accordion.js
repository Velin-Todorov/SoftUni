function toggle() {
    let moreBtn = document.getElementsByClassName('button')[0]
    let text = document.getElementById('extra')

    console.log(text.textContent)

    if (moreBtn.textContent == 'More'){
        text.style.display = 'block';
        moreBtn.textContent = 'Less';
    }else if (moreBtn.textContent == 'Less'){
        text.style.display = 'none';
        moreBtn.textContent = 'More';        
    }

}