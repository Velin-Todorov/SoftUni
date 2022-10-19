function validate() {
    let emailField = document.getElementById('email')
    emailField.addEventListener('change', validation)

    let regexp = new RegExp('^[a-z]+@[a-z]+\.[a-z]+$', 'gm')

    function validation() {
        if(emailField.value.match(regexp)){
            emailField.classList.remove('error');
        }else{
            emailField.setAttribute('class', 'error');
        }        
    }
}