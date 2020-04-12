/**
 * @file card-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the card class
 */

"use strict";

let expectOnCardTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnCardTest = require('chai').expect;
} else { // Execution in browser
  expectOnCardTest = expect;
}

let ClassCardOnCardTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassCardOnCardTest = require('../src/card.js').Card;
} else { // Execution in browser
  ClassCardOnCardTest = Card;
}

const SPADES_ON_CARD_TEST = 4;
const HEARTS_ON_CARD_TEST = 3;
const DIAMONDS_ON_CARD_TEST = 2;
const CLUBS_ON_CARD_TEST = 1;

const ACE_ON_CARD_TEST = 14;
const KING_ON_CARD_TEST = 13;
const QUEEN_ON_CARD_TEST = 12;
const JACK_ON_CARD_TEST = 11;
const TEN_ON_CARD_TEST = 10;
const NINE_ON_CARD_TEST = 9;
const EIGHT_ON_CARD_TEST = 8;
const SEVEN_ON_CARD_TEST = 7;
const SIX_ON_CARD_TEST = 6;
const FIVE_ON_CARD_TEST = 5;
const FOUR_ON_CARD_TEST = 4;
const THREE_ON_CARD_TEST = 3;
const TWO_ON_CARD_TEST = 2;

describe('ClassCardOnCardTest Class', () => {
  describe('Default properties', () => {
    const MY_CARD = new ClassCardOnCardTest();

    it('ClassCardOnCardTest has a suit', () => {
      expectOnCardTest(MY_CARD).to.have.property('suit');
      expectOnCardTest(MY_CARD.suit).to.be.a('number');
    });

    it('ClassCardOnCardTest has a rank', () => {
      expectOnCardTest(MY_CARD).to.have.property('rank');
      expectOnCardTest(MY_CARD.rank).to.be.a('number');
    });

    it('Default suit is Clubs', () => {
      expectOnCardTest(MY_CARD.suit).to.be.equal(CLUBS_ON_CARD_TEST);
    });

    it('Default rank is Two', () => {
      expectOnCardTest(MY_CARD.rank).to.be.equal(TWO_ON_CARD_TEST);
    });
  });

  describe('Non default property values', () => {
    const MY_CARD = new ClassCardOnCardTest(DIAMONDS_ON_CARD_TEST, ACE_ON_CARD_TEST)

    it('Modifies default suit correctly', () => {
      expectOnCardTest(MY_CARD.suit).to.be.equal(DIAMONDS_ON_CARD_TEST);
    });

    it('Modifies default rank correctly', () => {
      expectOnCardTest(MY_CARD.rank).to.be.equal(ACE_ON_CARD_TEST);
    });
  });

  describe('ClassCardOnCardTest to string', () => {
    const MY_CARD = new ClassCardOnCardTest();
    const MY_CARD_2 = new ClassCardOnCardTest(DIAMONDS_ON_CARD_TEST, ACE_ON_CARD_TEST);
    const MY_CARD_3 = new ClassCardOnCardTest(5, 20);

    it('Default values', () => {
      expectOnCardTest(MY_CARD.toString()).to.be.equal('Two of Clubs');
    });

    it('Modified values', () => {
      expectOnCardTest(MY_CARD_2.toString()).to.be.equal('Ace of Diamonds');
    });

    it('Unknown values', () => {
      expectOnCardTest(MY_CARD_3.toString()).to.be.equal('Unknown Rank of Unknown Suit');
    });
  });

  describe('Compare', () => {
    const THREE_OF_SPADES = new ClassCardOnCardTest(SPADES_ON_CARD_TEST, THREE_ON_CARD_TEST);
    const EIGHT_OF_DIAMONDS = new ClassCardOnCardTest(DIAMONDS_ON_CARD_TEST, EIGHT_ON_CARD_TEST);
    const EIGHT_OF_SPADES = new ClassCardOnCardTest(SPADES_ON_CARD_TEST, EIGHT_ON_CARD_TEST);

    it('Tree of Spades > Eight of Diamonds', () => {
      expectOnCardTest(ClassCardOnCardTest.compare(THREE_OF_SPADES, EIGHT_OF_DIAMONDS)).to.be.deep.equal(THREE_OF_SPADES);
      expectOnCardTest(ClassCardOnCardTest.compare(EIGHT_OF_DIAMONDS, THREE_OF_SPADES)).to.be.deep.equal(THREE_OF_SPADES);
    });


    it('Eight of Spades > Three of Spades', () => {
      expectOnCardTest(ClassCardOnCardTest.compare(EIGHT_OF_SPADES, THREE_OF_SPADES)).to.be.deep.equal(EIGHT_OF_SPADES);
      expectOnCardTest(ClassCardOnCardTest.compare(THREE_OF_SPADES, EIGHT_OF_SPADES)).to.be.deep.equal(EIGHT_OF_SPADES);
    });
  });
});
