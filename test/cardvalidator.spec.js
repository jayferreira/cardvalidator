const chai = require("chai");
const expect = chai.expect;
const cardNumber = require("../index");
const card = cardNumber.cardValidator;


describe("Tests expected to be false", () => {
    it('Should return false for equal numbers', () => {
        expect(card('1111111111111111')).to.equal(false);
    });

    it("Should return false for longer than 16 digits", () => {
        expect(card('11111111111111111111111')).to.equal(false);
    });
    it("Should return false for shorter than 16 digits", () => {
        expect(card('111111')).to.equal(false);
    });
    it("Should return false for invalid card numbers written in strings", () => {
        expect(card('5253193799067538')).to.equal(false);
    });   
    it("Should return false for invalid card numbers", () => {
        expect(card(5253193799067538)).to.equal(false);
    });
    it("Should return false for letter strings", () => {
        expect(card('hellohelloworldh')).to.equal(false);
    });   
   
});

describe("Tests expected to be true", () => {
    it("Should return valid for valid numbers written in strings", () => {
        expect(card('5253193799067539')).to.equal(true);
    });
    it("Should return valid for valid numbers", () => {
        expect(card(5253193799067539)).to.equal(true);
    });
    
});








