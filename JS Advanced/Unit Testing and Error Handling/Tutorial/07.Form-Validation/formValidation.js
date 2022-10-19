function validate() {
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPass = document.getElementById('confirm-password')
    let submitButton = document.getElementById('submit')
    let companyCheckbox = document.getElementById('company')

    submitButton.addEventListener('click', (ev) => ev.preventDefault())

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordRegex = /^[\w]{5,15}$/
    let flag = true;


    companyCheckbox.addEventListener('change', () => {
        if (companyCheckbox.checked) {
            document.getElementById('companyInfo').style.display = 'block'
        }
    })

    submitButton.addEventListener('click', inputValidation)

    function inputValidation() {
        if (username.value.match(usernameRegex)) {
            username.style.border = 'none'
        } else {
            username.style.borderColor = 'red';
            flag = false;
        }

        if (email.value.match(emailRegex)) {
            email.style.border = 'none';
        } else {
            email.style.borderColor = 'red';
            flag = false;
        }


        if (passwordRegex.exec(password.value) != null && passwordRegex.exec(confirmPass.value) != null && password.value == confirmPass.value){
            password.style.border = 'none';
            confirmPass.style.border = 'none'
        }else {
            confirmPass.style.borderColor = 'red'
            password.style.borderColor = 'red';
            flag = false;
        }


        if (companyCheckbox.checked) {

            let companyNumber = document.getElementById('companyNumber')

            let number = Number(companyNumber.value)

            if (typeof number == 'number') {
                if (1000 <= number && number <= 9999) {
                    companyNumber.style.border = 'none'
                } else {
                    companyNumber.style.borderColor = 'red';
                    flag = false;
                }
            }
        }

        if (!flag) {
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('valid').style.display = 'block';
        }
    }

}
