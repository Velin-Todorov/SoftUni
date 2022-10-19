const {mathEnforcer} = require('./ex4_tut')
const {expect} = require('chai')
const {assert} = require('chai')


describe('mathEnforcer', () =>{

    let res = mathEnforcer

    it('return undefined when input type not a number', () =>{
        let result = res.addFive('a')
        assert.equal(result, undefined);
    })

    it('return the number +5 when input type correct', () => {
        let result = res.addFive(5);
        assert.equal(result, 10)
    })

    it('return undefined when input type not a number', () =>{
        let result = res.subtractTen('a')
        assert.equal(result, undefined);
    })

    it('return the number -10 when input type correct', () => {
        let result = res.subtractTen(5);
        assert.equal(result, -5)
    })

    it('return undefined when input type not a number num1', () =>{
        let result = res.sum('a', 1)
        assert.equal(result, undefined);
    })

    it('return undefined when input type not a number num2', () =>{
        let result = res.sum(1, 'a')
        assert.equal(result, undefined);
    })

    it('return the sum when input type correct', () => {
        let result = res.sum(6, 5);
        assert.equal(result, 11)
    })

})