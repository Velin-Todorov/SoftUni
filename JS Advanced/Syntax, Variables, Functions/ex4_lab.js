function CircleArea(radius){

    if (typeof radius !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
    else{
        let area = radius ** 2 * Math.PI
        console.log(area.toFixed(2))
    }
}

CircleArea('name')
CircleArea(10)
