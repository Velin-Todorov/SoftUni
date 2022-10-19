const {lookupChar} = require('./ex3_tut ')
const {expect} = require('chai')
const {assert} = require('chai')
    

describe('lookupChar test', () => {

    it('return undefined when input not string', () => {
        let res = lookupChar(5, 0)
        expect(res).to.be.equal(undefined)

    })

    it('return undefined when index is not a number', () => {
        let res = lookupChar('hello', 'h')
        expect(res).to.be.equal(undefined)
    })

    it('return undefined when index not a number string', () => {
        let res = lookupChar('hello', '2')
        expect(res).to.be.equal(undefined)
    })

    it('return incorrect index when index is bigger than string length', () => {
        let res = lookupChar('hello', 6)
        expect(res).to.be.equal('Incorrect index')
    })

    it('return incorrect index when index is < 0', () => {
        let res2 = lookupChar('hello', -1)
        expect(res2).to.be.equal('Incorrect index')
    })

    it('return correct index', () => {
        let res = lookupChar('hello', 1)
        expect(res).to.be.equal('e')
    })

})