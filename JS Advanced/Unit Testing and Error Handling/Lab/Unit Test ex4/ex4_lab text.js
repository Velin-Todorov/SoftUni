const { sum } = require('./ex4_lab');
const {expect} = require('chai')


describe ('correct type of argument passed', () => {

    it('should return correct result with an arrays of numbers', () =>{
        let arr = [2, 2, 3]
        let res = sum(arr)

        expect(res).to.be.equal(7);

    })

    it('it should return Nan if type of argument is not Array', () => {
        let data = 'hello'
        let res = sum(data)

        expect(res).to.be.NaN;
        
    })

    it('should calculate correct result with mixed types', () => {
        let data = [1, 2.5, 4.5, 2]
        let res = sum(data)
        expect(res).to.be.equal(10);

    })

});