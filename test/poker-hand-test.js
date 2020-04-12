/**
 * @file poker-hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the poker hand class
 */

"use strict";

let expectOnPokerHandTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPokerHandTest = require('chai').expect;
} else { // Execution in browser
  expectOnPokerHandTest = expect;
}

let ClassCardOnPokerHandTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassCardOnPokerHandTest = require('../src/card.js').Card;
} else { // Execution in browser
  ClassCardOnPokerHandTest = Card;
}

let ClassHandOnPokerHandTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassHandOnPokerHandTest = require('../src/hand.js').Hand;
} else { // Execution in browser
  ClassHandOnPokerHandTest = Hand;
}

let ClassDeckOnPokerHandTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassDeckOnPokerHandTest = require('../src/deck.js').Deck;
} else { // Execution in browser
  ClassDeckOnPokerHandTest = Deck;
}

let ClassPokerHandOnPokerHandTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassPokerHandOnPokerHandTest = require('../src/poker-hand.js').PokerHand;
} else { // Execution in browser
  ClassPokerHandOnPokerHandTest = PokerHand;
}

const SPADES_ON_POKER_HAND_TEST = 4;
const HEARTS_ON_POKER_HAND_TEST = 3;
const DIAMONDS_ON_POKER_HAND_TEST = 2;
const CLUBS_ON_POKER_HAND_TEST = 1;

const ACE_ON_POKER_HAND_TEST = 14;
const KING_ON_POKER_HAND_TEST = 13;
const QUEEN_ON_POKER_HAND_TEST = 12;
const JACK_ON_POKER_HAND_TEST = 11;
const TEN_ON_POKER_HAND_TEST = 10;
const NINE_ON_POKER_HAND_TEST = 9;
const EIGHT_ON_POKER_HAND_TEST = 8;
const SEVEN_ON_POKER_HAND_TEST = 7;
const SIX_ON_POKER_HAND_TEST = 6;
const FIVE_ON_POKER_HAND_TEST = 5;
const FOUR_ON_POKER_HAND_TEST = 4;
const THREE_ON_POKER_HAND_TEST = 3;
const TWO_ON_POKER_HAND_TEST = 2;

describe('Poker ClassHandOnPokerHandTest Class', () => {
  describe('Default inherited properties', () => {
    const LABEL = 'new hand';
    let myPokerHand;

    beforeEach(() => {
      myPokerHand = new ClassPokerHandOnPokerHandTest(LABEL);
    });

    it('Poker hand has an inherited label', () => {
      expectOnPokerHandTest(myPokerHand).to.have.property('label');
      expectOnPokerHandTest(myPokerHand.label).to.be.a('string');
      expectOnPokerHandTest(myPokerHand.label).to.be.equal(LABEL);
    });

    it('Poker hand has an inherited array of cards', () => {
      expectOnPokerHandTest(myPokerHand).to.have.property('cards');
      expectOnPokerHandTest(myPokerHand.cards).to.be.an('array');
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(0);
    });
  });

  describe('Poker hand inherited to string', () => {
    const MY_POKER_HAND = new ClassPokerHandOnPokerHandTest('new hand');

    it('Default value', () => {
      expectOnPokerHandTest(MY_POKER_HAND.toString()).to.be.equal('');
    });
  });

  describe('Poker hand inherited methods', () => {
    const TWO_OF_CLUBS = new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST);
    const THREE_OF_CLUBS = new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST);

    let myDeck = new ClassDeckOnPokerHandTest();
    let myPokerHand = new ClassPokerHandOnPokerHandTest('new hand');

    it('Add a card', () => {
      myPokerHand.addCard(TWO_OF_CLUBS);
      expectOnPokerHandTest(myPokerHand.cards[myPokerHand.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(1);
    });

    it('Pop a specific card', () => {
      expectOnPokerHandTest(myPokerHand.popCard(TWO_OF_CLUBS)).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(0);
    });

    it('Move cards', () => {
      ClassHandOnPokerHandTest.moveCards(myDeck, 2, myPokerHand);
      expectOnPokerHandTest(myPokerHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnPokerHandTest(myPokerHand.cards[1]).to.be.deep.equal(THREE_OF_CLUBS);
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(2);
    });
  });

  describe('Poker hand', () => {
    let myPokerHand;

    beforeEach(() => {
      myPokerHand = new ClassPokerHandOnPokerHandTest('new hand');
    });

    it('Has a pair', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(2);
      expectOnPokerHandTest(myPokerHand.hasPair()).to.be.equal(true);
    });

    it('Has not a pair', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(2);
      expectOnPokerHandTest(myPokerHand.hasPair()).to.be.equal(false);
    });

    it('Has two pairs', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(4);
      expectOnPokerHandTest(myPokerHand.hasTwoPairs()).to.be.equal(true);
    });

    it('Has not two pairs', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(4);
      expectOnPokerHandTest(myPokerHand.hasTwoPairs()).to.be.equal(false);
    });

    it('Has three of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(3);
      expectOnPokerHandTest(myPokerHand.hasThreeOfaKind()).to.be.equal(true);
    });

    it('Has not three of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(3);
      expectOnPokerHandTest(myPokerHand.hasThreeOfaKind()).to.be.equal(false);
    });

    it('Has a straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraight()).to.be.equal(true);
    });

    it('Has a special case of a straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraight()).to.be.equal(true);
    });

    it('Has not a straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, EIGHT_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraight()).to.be.equal(false);
    });

    it('Has a flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasFlush()).to.be.equal(true);
    });

    it('Has not a flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasFlush()).to.be.equal(false);
    });

    it('Has a full house', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasFullHouse()).to.be.equal(true);
    });

    it('Has not a full house because of the three of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasFullHouse()).to.be.equal(false);
    });

    it('Has not a full house because of the pair', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasFullHouse()).to.be.equal(false);
    });

    it('Has four of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(4);
      expectOnPokerHandTest(myPokerHand.hasFourOfaKind()).to.be.equal(true);
    });

    it('Has not four of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(4);
      expectOnPokerHandTest(myPokerHand.hasFourOfaKind()).to.be.equal(false);
    });

    it('Has a straigt flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, EIGHT_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraightFlush()).to.be.equal(true);
    });

    it('Has a special case of a straight flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraightFlush()).to.be.equal(true);
    });

    it('Has not a straigt flush because of the straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, EIGHT_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraightFlush()).to.be.equal(false);
    });

    it('Has not a straigt flush because of the flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, EIGHT_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasStraightFlush()).to.be.equal(false);
    });

    it('Has royal flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, TEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasRoyalFlush()).to.be.equal(true);
    });

    it('Has not a royal flush because of the straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, TEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasRoyalFlush()).to.be.equal(false);
    });

    it('Has not a royal flush because of the flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, TEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      expectOnPokerHandTest(myPokerHand.hasRoyalFlush()).to.be.equal(false);
    });

    it('Classifies anything', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('');
    });

    it('Classifies a pair', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Pair');
    });

    it('Classifies two pairs', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Two Pairs');
    });

    it('Classifies three of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Three of a Kind');
    });

    it('Classifies a straight', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, TWO_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, THREE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Straight');
    });

    it('Classifies a flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Flush');
    });

    it('Classifies a full house', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Full House');
    });

    it('Classifies four of a kind', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(CLUBS_ON_POKER_HAND_TEST, NINE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(HEARTS_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Four of a Kind');
    });

    it('Classifies a straight flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FOUR_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SEVEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, FIVE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, EIGHT_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(DIAMONDS_ON_POKER_HAND_TEST, SIX_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Straight Flush');
    });

    it('Classifies a royal flush', () => {
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, TEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, QUEEN_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, ACE_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, JACK_ON_POKER_HAND_TEST));
      myPokerHand.addCard(new ClassCardOnPokerHandTest(SPADES_ON_POKER_HAND_TEST, KING_ON_POKER_HAND_TEST));
      expectOnPokerHandTest(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expectOnPokerHandTest(myPokerHand.label).to.be.equal('Royal Flush');
    });

    it('Statistics of sorted deck', () => {
      let statisticResults = ClassPokerHandOnPokerHandTest.statistics(5, 7, 10);
      expectOnPokerHandTest(statisticResults).to.be.an('array');
      expectOnPokerHandTest(statisticResults.length).to.be.equal(10);
    });
  });
});
