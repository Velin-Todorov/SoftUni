const {isOddOrEven} = require('./ex2_tut')
const {expect} = require('chai')
const {assert} = require('chai')

describe('isOddOrEven', () => {

    it('return undefined when input not a string', () => {
        let res = isOddOrEven(5);
        expect(res).to.be.equal(undefined);
    })

    it('returns even when string length is even', () => {
        let res = isOddOrEven('hell')
        expect(res).to.be.equal('even')

    })

    it('return odd when string lenght is odd', () => {
        let res = isOddOrEven('hello');
        expect(res).to.be.equal('odd')
    })

})