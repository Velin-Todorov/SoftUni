function juiceFlavors(arr) {

    const factory = {};


    for (let n of arr) {
        let data = n.split('=>')
        let key = data[0].trim()
        let quantity = Number(data[1])

        let value = factory[n]
        let calculation = 0
        let producedBottles = 0

        if (!factory.hasOwnProperty(key)) {
            factory[key] = quantity
        } else {
            factory[key] += quantity
        }

    }
    if (factory[key] > 1000) {
        calculation = factory[key] / 1000 | 0

        if (calculation > 0) {
            producedBottles += calculation;
            console.log(`${n} => ${producedBottles}`)

        }
    }

}


juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])