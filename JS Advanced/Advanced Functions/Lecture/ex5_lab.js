function commandProcessor(){
    let text = '';
    let obj = {
        text: text,
        append: (word) => obj.text += word,
        removeStart: (n) => obj.text = obj.text.substring(n),
        removeEnd: (n) => obj.text = obj.text.slice(0, -n),
        print: () => console.log(obj.text)
    }

    return obj;
}

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
