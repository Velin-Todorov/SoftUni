function focused() {
    
    let divs = Array.from(document.querySelectorAll('input'));
    divs.forEach(n => {n.addEventListener('focus', onFocus);
                       n.addEventListener('blur', onBlur)});

    function onFocus(ev){
        ev.target.parentElement.className = 'focused';
    }

    function onBlur(ev){
        ev.target.parentElement.className = '';
    }


}