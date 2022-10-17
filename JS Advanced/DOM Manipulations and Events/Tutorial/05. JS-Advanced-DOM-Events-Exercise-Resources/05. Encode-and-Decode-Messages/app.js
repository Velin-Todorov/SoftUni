function encodeAndDecodeMessages() {
    let buttons = Array.from(document.querySelectorAll('button'))
    let decodedText = document.getElementsByTagName('textarea')[1];
    
    
    let button1 = buttons[0];
    let button2 = buttons[1];
    
    button1.addEventListener('click', encode);
    button2.addEventListener('click', decode);

    function encode() {
        let msg = document.getElementsByTagName('textarea')[0].value;
        let result = ''

        for (let i = 0; i < msg.length; i++) {
            let asciiChar = msg.charCodeAt(i) + 1;
            let valueFromAscii = String.fromCharCode(asciiChar);
            result += valueFromAscii;
        }
        
        decodedText.value = result;
        document.getElementsByTagName('textarea')[0].value = '';
    }

    function decode() {
        let decodedMessage = decodedText.value;
        let res = ''

        for (let i = 0; i < decodedMessage.length; i++) {
            let asciiChar = decodedMessage.charCodeAt(i) - 1;
            let val = String.fromCharCode(asciiChar);
            res += val;
        }

        decodedText.value = res;
    }


}