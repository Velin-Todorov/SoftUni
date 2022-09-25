function rectangle(width, height, color){
    
    let capitalized = color.charAt(0).toUpperCase() + color.slice(1)

    function calcArea(){
        return obj.width * obj.height;
    }
    
    let obj = {width, height, color, calcArea}
    obj.color = capitalized
    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());