const chai = require("chai");
const expect = chai.expect;
const cardNumber = require("../index");
const card = cardNumber.cardValidator;


describe("Card Validation", () => {
    it('Should return false for equal numbers', () => {
        expect(card('1111111111111111')).to.equal(false);
    });

    it("Should return invalid for longer than 11 digits", () => {
        expect(card('11111111111111111111111')).to.equal(false);
    });
    it("Should return invalid for shorter than 11 digits", () => {
        expect(card('111111')).to.equal(false);
    });
   
});








