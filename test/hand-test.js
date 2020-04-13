/**
 * @file hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the hand class
 */

"use strict";

let expectOnHandTest;
let ClassCardOnHandTest;
let ClassHandOnHandTest;
let ClassDeckOnHandTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnHandTest = require('chai').expect;
  ClassCardOnHandTest = require('../src/card.js').Card;
  ClassHandOnHandTest = require('../src/hand.js').Hand;
  ClassDeckOnHandTest = require('../src/deck.js').Deck;
} else { // Execution in browser
  expectOnHandTest = expect;
  ClassCardOnHandTest = Card;
  ClassHandOnHandTest = Hand;
  ClassDeckOnHandTest = Deck;
}

const SPADES_ON_HAND_TEST = 4;
const HEARTS_ON_HAND_TEST = 3;
const DIAMONDS_ON_HAND_TEST = 2;
const CLUBS_ON_HAND_TEST = 1;

const ACE_ON_HAND_TEST = 14;
const KING_ON_HAND_TEST = 13;
const QUEEN_ON_HAND_TEST = 12;
const JACK_ON_HAND_TEST = 11;
const TEN_ON_HAND_TEST = 10;
const NINE_ON_HAND_TEST = 9;
const EIGHT_ON_HAND_TEST = 8;
const SEVEN_ON_HAND_TEST = 7;
const SIX_ON_HAND_TEST = 6;
const FIVE_ON_HAND_TEST = 5;
const FOUR_ON_HAND_TEST = 4;
const THREE_ON_HAND_TEST = 3;
const TWO_ON_HAND_TEST = 2;

describe('ClassHandOnHandTest Class', () => {
  describe('Default properties', () => {
    const LABEL = 'my hand';
    const MAX_CARDS = 9;
    let myHand;

    beforeEach(() => {
      myHand = new ClassHandOnHandTest(LABEL, MAX_CARDS);
    });

    it('ClassHandOnHandTest has a label', () => {
      expectOnHandTest(myHand).to.have.property('label');
      expectOnHandTest(myHand.label).to.be.a('string');
      expectOnHandTest(myHand.label).to.be.equal(LABEL);
    });

    it('ClassHandOnHandTest has a max number of cards', () => {
      expectOnHandTest(myHand).to.have.property('maxCards');
      expectOnHandTest(myHand.maxCards).to.be.a('number');
      expectOnHandTest(myHand.maxCards).to.be.equal(MAX_CARDS);
    });

    it('ClassHandOnHandTest has an array of cards', () => {
      expectOnHandTest(myHand).to.have.property('cards');
      expectOnHandTest(myHand.cards).to.be.an('array');
      expectOnHandTest(myHand.cards.length).to.be.equal(0);
    });
  });

  describe('ClassHandOnHandTest to string', () => {
    const MY_HAND = new ClassHandOnHandTest('new hand');

    it('Default value', () => {
      expectOnHandTest(MY_HAND.toString()).to.be.equal('');
    });
  });

  describe('ClassHandOnHandTest methods', () => {
    const TWO_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, TWO_ON_HAND_TEST);
    const THREE_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, THREE_ON_HAND_TEST);
    const FOUR_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, FOUR_ON_HAND_TEST);
    const FIVE_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, FIVE_ON_HAND_TEST);
    const SIX_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, SIX_ON_HAND_TEST);
    const SEVEN_OF_CLUBS = new ClassCardOnHandTest(CLUBS_ON_HAND_TEST, SEVEN_ON_HAND_TEST);

    let myDeck = new ClassDeckOnHandTest();
    let myHand = new ClassHandOnHandTest('new hand');
    let myHand2 = new ClassHandOnHandTest('new hand 2', 7);

    it('Add a card', () => {
      expectOnHandTest(myHand.addCard(TWO_OF_CLUBS)).to.be.equal(true);
      expectOnHandTest(myHand.addCard(THREE_OF_CLUBS)).to.be.equal(true);
      expectOnHandTest(myHand.addCard(FOUR_OF_CLUBS)).to.be.equal(true);
      expectOnHandTest(myHand.addCard(FIVE_OF_CLUBS)).to.be.equal(true);
      expectOnHandTest(myHand.addCard(SIX_OF_CLUBS)).to.be.equal(true);
      expectOnHandTest(myHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnHandTest(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(SIX_OF_CLUBS);
      expectOnHandTest(myHand.cards.length).to.be.equal(5);
    });

    it('Add a card when hand is full', () => {
      expectOnHandTest(myHand.addCard(SEVEN_OF_CLUBS)).to.be.equal(false);
      expectOnHandTest(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(SIX_OF_CLUBS);
      expectOnHandTest(myHand.cards.length).to.be.equal(5);
    });

    it('Add a "false" card', () => {
      expectOnHandTest(myHand.addCard(false)).to.be.equal(false);
      expectOnHandTest(myHand.cards.length).to.be.equal(5);
    });

    it('Remove a specific card', () => {
      expectOnHandTest(myHand.removeCard(FIVE_OF_CLUBS)).to.be.deep.equal(FIVE_OF_CLUBS);
      expectOnHandTest(myHand.removeCard(THREE_OF_CLUBS)).to.be.deep.equal(THREE_OF_CLUBS);
      expectOnHandTest(myHand.cards.length).to.be.equal(3);
    });

    it('Pop a card', () => {
      expectOnHandTest(myHand.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnHandTest(myHand.popCard()).to.be.deep.equal(FOUR_OF_CLUBS);
      expectOnHandTest(myHand.popCard()).to.be.deep.equal(SIX_OF_CLUBS);
      expectOnHandTest(myHand.cards.length).to.be.equal(0);
    });

    it('Remove a card when hand is empty', () => {
      expectOnHandTest(myHand.removeCard(THREE_OF_CLUBS)).to.be.equal(false);
      expectOnHandTest(myHand.cards.length).to.be.equal(0);
    });

    it('Pop a card when hand is empty', () => {
      expectOnHandTest(myHand.popCard()).to.be.equal(false);
      expectOnHandTest(myHand.cards.length).to.be.equal(0);
    });

    it('Move cards', () => {
      ClassHandOnHandTest.moveCards(myDeck, 5, myHand);
      expectOnHandTest(myHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnHandTest(myHand.cards[1]).to.be.deep.equal(THREE_OF_CLUBS);
      expectOnHandTest(myHand.cards.length).to.be.equal(5);
    });

    it('Move a card when source hand is empty', () => {
      ClassHandOnHandTest.moveCards(myHand, 6, myHand2);
      expectOnHandTest(myHand.cards.length).to.be.equal(0);
    });

    it('Move a card when destiny hand is full', () => {
      ClassHandOnHandTest.moveCards(myDeck, 3, myHand2);
      expectOnHandTest(myHand2.cards.length).to.be.equal(7);
    });
  });
});
