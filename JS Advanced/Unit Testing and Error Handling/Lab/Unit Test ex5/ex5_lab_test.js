const {isSymmetric} = require('./ex5_lab')
const {expect} = require('chai')

describe ('isSymmetric', () => {
    let data = [1, 2, 4]

    it('return correctly false when arg is not array', () => {

        let data = 'hello'
        let res = isSymmetric(data)

        expect(res).to.be.equal(false);
    })

    it('should return false when not symmetric', () => {
        let res = isSymmetric(data);
        expect(res).to.be.equal(false)
    })


    it('should return true when symmetric', () => {
        let data = [1, 1, 1]
        let res = isSymmetric(data);

        expect(res).to.be.equal(true);
    })
});