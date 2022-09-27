function attachGradientEvents() {
    
    let gradientBox = document.getElementById('gradient-box');
    let result = document.getElementById('result');

    let hoverHere = document.getElementById('gradient');
    hoverHere.addEventListener('mousemove', gradientIn);
    hoverHere.addEventListener('mouseout', gradientOut);

    function gradientIn(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + '%';

    }

    function gradientOut(event){
        result.textContent = '';
    }

}