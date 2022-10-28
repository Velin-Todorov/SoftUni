



describe('choosingType function', () => {
    let func = chooseYourCar.choosingType

    it('should throw Invalid Year', () => {
        expect(() => func({ year: 1800 }).to.throw(`Invalid Year!`))
    })

    it('should return meet requirements', () => {
        let result = func('Sedan', 'Blue', 2010)
        expect(result).to.equal(`This Blue Sedan meets the requirements, that you have.`)
    })

    it('should return too old for you', () => {
        let result = func('Sedan', 'Blue', 2009)
        expect(result).to.equal(`This Sedan is too old for you, especially with that Blue color.`)
    })

    it('should return not for you', () => {
        expect(() => func({ type: 'Sport', color: 'Blue', year: 2009 }).to.throw('This type of car is not what you are looking for.'))

    })
})

describe('brandName', () => {
    let func = chooseYourCar.brandName
    it('should thrown Invalid info', () => {
        expect(() => func({ brands: 1, brandIndex: 'a' })).to.throw('Invalid Information!')
    })

    it('should return invalid info for bad indx ', () => {
        expect(() => func({ brands: ['Hello'], brandIndex: 3 })).to.throw('Invalid Information!')
    })

    it('should return invalid info for bad idx', () => {
        expect(() => func({ brands: ['Hello'], brandIndex: -1 })).to.throw('Invalid Information!')
    })

    it('should push items in array', () => {
        let res = func(['BMW', 'TEST', 'HELLO'], 1)
        expect(res).to.equal('BMW, HELLO')
    })

})

describe('carFuelConsumption', () => {
    let func = chooseYourCar.carFuelConsumption

    it('should throw Invalid info when string', () => {
        expect(() => func({ distanceInKilometers: 'a' }).to.throw(`Invalid Information!`))
    })

    it('should throw Invalid info when less than 0', () => {
        expect(() => func({ distanceInKilometers: 0 }).to.throw(`Invalid Information!`))
    })

    it('should throw Invalid info when string', () => {
        expect(() => func({ distanceInKilometers: 100, consumptedFuelInLiters: 'a' }).to.throw(`Invalid Information!`))
    })

    it('should throw Invalid info when less than 0', () => {
        expect(() => func({ distanceInKilometers: 100, consumptedFuelInLiters: -1 }).to.throw(`Invalid Information!`))
    })

    it('should return a number from litersPerHundrednKM', () => {
        let res = func(100, 100)
        expect(res).to.equal(`The car burns too much fuel - 100.00 liters!`)
    })

    it('should return another message for liters per HundredKM', () => {
        let res = func(1000, 20)
        expect(res).to.equal(`The car is efficient enough, it burns 2.00 liters/100 km.`)
    })
})
