describe ('chooseYourCar', () => {
    describe('choosingType function', () => {
        it('should throw Invalid Year', () => {
            expect(() => chooseYourCar.choosingType({year: 1800}).to.throw(`Invalid Year!`))
        })
 
        it('should return meet requirements', () => {
            let result = chooseYourCar.choosingType('Sedan', 'Blue', 2010)
            expect(result).to.equal(`This Blue Sedan meets the requirements, that you have.`)
        })
 
        it('should return too old for you', () =>{
            let result = chooseYourCar.choosingType('Sedan', 'Blue', 2009)
            expect(result).to.equal(`This Sedan is too old for you, especially with that Blue color.`)
        })
 
        it('should return not for you', () => {
            expect(() => chooseYourCar.choosingType({type: 'Sport', color: 'Blue', year: 2009}).to.throw('This type of car is not what you are looking for.'))
 
        })
    })
    
    describe('brandName', () =>{
        it('should thrown Invalid info', () => {
            expect(() => chooseYourCar.brandName({brands: 1, brandIndex: 'a'})).to.throw('Invalid Information')
        })
        
        it('should return invalid info for bad indx ', () => {
            expect(() => chooseYourCar.brandName({ brands: ['Hello'], brandIndex: 3 })).to.throw('Invalid Information!')
        })
    
        it('should return invalid info for bad idx', () => {
            expect(() => chooseYourCar.brandName({ brands: ['Hello'], brandIndex: -1 })).to.throw('Invalid Information!')
        })
    
        it('should push items in array', () => {
            expect(chooseYourCar.brandName(['BMW', 'TEST', 'HELLO'], 1)).to.equal('BMW, HELLO')
        })
 
    })

    describe('carFuelConsumption', () => {
    
        it('should throw Invalid info when string', () => {
            expect(() => chooseYourCar.carFuelConsumption({ distanceInKilometers: 'a' }).to.throw(`Invalid Information!`))
        })
    
        it('should throw Invalid info when less than 0', () => {
            expect(() => chooseYourCar.carFuelConsumption({ distanceInKilometers: 0 }).to.throw(`Invalid Information!`))
        })
    
        it('should throw Invalid info when string', () => {
            expect(() => chooseYourCar.carFuelConsumption({ distanceInKilometers: 100, consumptedFuelInLiters: 'a' }).to.throw(`Invalid Information!`))
        })
    
        it('should throw Invalid info when less than 0', () => {
            expect(() => chooseYourCar.carFuelConsumption({ distanceInKilometers: 100, consumptedFuelInLiters: -1 }).to.throw(`Invalid Information!`))
        })
    
        it('should return a number from litersPerHundrednKM', () => {
            chooseYourCar.carFuelConsumption(100, 100).to.equal(`The car burns too much fuel - 100.00 liters!`)
        })
    
        it('should return another message for liters per HundredKM', () => {
            expect(chooseYourCar.carFuelConsumption(1000, 20)).to.equal(`The car is efficient enough, it burns 2.00 liters/100 km.`)
        })
    })
    
})