const expect = require('chai').expect;
const addTwoNumbers = require('../bug/bug');


describe('Adding two numbers', () => {


    it('means that 1 + 1 = 2', () => {

        const n1 = 1;
        const n2 = 1;
        expect(addTwoNumbers(n1, n2)).to.be.eq(2);

    });

    it.only('this test case will fail because of mocha ???', () => {
        const n1 = 1;
        const n2 = 1;
        expect(addTwoNumbers(n1, n2)).to.be.eq(2);

    });

});
