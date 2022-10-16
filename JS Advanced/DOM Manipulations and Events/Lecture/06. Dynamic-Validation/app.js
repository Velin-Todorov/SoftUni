function validate() {

    let input = document.getElementById('email');
    let regex = new RegExp('^[^A-Z]+@[a-z]{1,}\.[a-z]{1,}$', 'gm');

    input.addEventListener("change", validation);


    function validation(ev){

        let res = String(ev.target.value).match(regex)
        if (res){
            ev.target.className = '';
        }else{
            ev.target.className = 'error';
        }
    
    }

}