class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(number) {
        this.innerLength += number
    }

    decrease(number) {
        this.innerLength -= number;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';

        } else {
            return this.innerString;
        }

    }

}


let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString())