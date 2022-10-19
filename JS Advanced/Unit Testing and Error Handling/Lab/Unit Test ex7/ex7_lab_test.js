const {createCalculator} = require('./ex7_lab')
const {expect} = require('chai')
const {assert} = require('chai')

describe('createCalculator', () => {

    let res = createCalculator()

    it('should return an object with some properties', () => {

        assert.typeOf(res, 'Object')
        expect(res).to.haveOwnProperty('add')
        expect(res).to.haveOwnProperty('subtract')
        expect(res).to.haveOwnProperty('get')

    })
    
    it('get function returns the internal value', () => {

        expect(res.get()).to.be.equal(0)

    })


    it('add function receive correct input type #string', () => {
        let add = res.add('5')
        let value = res.get()
        expect(value).to.be.equal(5);

    })

    it('add function receive correct input type #number', () => {
        let res = createCalculator()
        let add = res.add(6);
        let value = res.get()
        expect(value).to.be.equal(6);
    })

    it('subtract function receive correct input type #string' , () => {
        let subt = res.subtract('5')
        let value = res.get();
        expect(value).to.be.equal(0);

    })

    it('subtract receives Number', () => {
        let subt = res.subtract(5);
        let value = res.get();
        expect(value).to.be.equal(-5);
    })

})