function area(){
    return Math.abs(this.x * this.y)
};

function vol(){
    return Math.abs(this.x * this.y * this.z)
};


function solve(area, vol, input){
    let arr = [];
    let result = {};
    let inputParsed = JSON.parse(input);
    

    for (let n of inputParsed){
        
        result.area = area.call(n);
        result.volume = vol.call(n);

        arr.push(result);
        result = {};

    }
    return arr;
}
solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)

