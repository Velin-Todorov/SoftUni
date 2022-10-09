class Hex {
    constructor(value) {
        this.value = value;
       
    }

    valueOf() {
        return this.value
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase()
    }

    plus(data){
        let result = 0;
        if (typeof data === Number){
            result = this.value + data
        }else if (data instanceof Hex){
            result = this.value + data.value;
        }
        return new Hex(result);
    }

    minus(data){
        let result = 0;
        if (typeof data === Number){
            result = this.value - data
        }else if (data instanceof Hex){
            result = this.value - data.value;
        }

        return new Hex(result)
    }

    parse(string){
        return parseInt(string, 16);
    }

}



let FF = new Hex(255);
let a = new Hex(10);
let b = new Hex(5);
console.log(FF.toString());
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
