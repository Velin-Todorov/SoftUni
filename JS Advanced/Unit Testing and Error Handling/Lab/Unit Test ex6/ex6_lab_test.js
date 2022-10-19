const { rgbToHexColor } = require('./ex6_lab')
const { expect } = require('chai')

describe('rgbToHexColor', () => {

    let red = 2
    let green = 3
    let blue = 4

    it('should return undefined when red is invalid', () => {
        let red = -1;
        let res = rgbToHexColor(red, green, blue)
        expect(res).to.be.equal(undefined);
    })

    it('should return undefined when green is invalid', () => {
        let green = 256
        let res = rgbToHexColor(red, green, blue)
        expect(res).to.be.equal(undefined);
    })


    it('should return undefined when blue is invalid', () => {
        let blue = 'a'
        let res = rgbToHexColor(red, green, blue)
        expect(res).to.be.equal(undefined);

    })

    it('should return correct result', () => {
        let expected = `#0${(red.toString(16).toUpperCase()).slice(-2)}0${green.toString(16).toUpperCase().slice(-2)}0${blue.toString(16).toUpperCase().slice(-2)}`

        let actual = rgbToHexColor(red, green, blue);

        expect(actual).to.be.equal(expected);

    })

});