function calculator() {
    let num1 = null;
    let num2 = null;
    let res = null;

    return {
        init,
        add,
        subtract 
    }

    function init(n1, n2, result){
        num1 = document.querySelector(n1);
        num2 = document.querySelector(n2);
        res = document.querySelector(result);

    };


    function add(){
        res.value =  Number(num1.value) + Number(num2.value);

    };


    function subtract(){
        res.value = Number(num1.value) - Number(num2.value);
    };

}
    



