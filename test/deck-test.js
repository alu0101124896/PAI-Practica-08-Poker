/**
 * @file deck-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the deck class
 */

"use strict";

let expectOnDeckTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnDeckTest = require('chai').expect;
} else { // Execution in browser
  expectOnDeckTest = expect;
}

let ClassCardOnDeckTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassCardOnDeckTest = require('../src/card.js').Card;
} else { // Execution in browser
  ClassCardOnDeckTest = Card;
}

let ClassHandOnDeckTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassHandOnDeckTest = require('../src/hand.js').Hand;
} else { // Execution in browser
  ClassHandOnDeckTest = Hand;
}

let ClassDeckOnDeckTest;
if (typeof require !== 'undefined') { // Execution in node
  ClassDeckOnDeckTest = require('../src/deck.js').Deck;
} else { // Execution in browser
  ClassDeckOnDeckTest = Deck;
}

const SPADES_ON_DECK_TEST = 4;
const HEARTS_ON_DECK_TEST = 3;
const DIAMONDS_ON_DECK_TEST = 2;
const CLUBS_ON_DECK_TEST = 1;

const ACE_ON_DECK_TEST = 14;
const KING_ON_DECK_TEST = 13;
const QUEEN_ON_DECK_TEST = 12;
const JACK_ON_DECK_TEST = 11;
const TEN_ON_DECK_TEST = 10;
const NINE_ON_DECK_TEST = 9;
const EIGHT_ON_DECK_TEST = 8;
const SEVEN_ON_DECK_TEST = 7;
const SIX_ON_DECK_TEST = 6;
const FIVE_ON_DECK_TEST = 5;
const FOUR_ON_DECK_TEST = 4;
const THREE_ON_DECK_TEST = 3;
const TWO_ON_DECK_TEST = 2;

const SUITS_ON_DECK_TEST = [CLUBS_ON_DECK_TEST, DIAMONDS_ON_DECK_TEST, HEARTS_ON_DECK_TEST, SPADES_ON_DECK_TEST];
const RANKS_ON_DECK_TEST = [TWO_ON_DECK_TEST, THREE_ON_DECK_TEST, FOUR_ON_DECK_TEST, FIVE_ON_DECK_TEST, SIX_ON_DECK_TEST, SEVEN_ON_DECK_TEST, EIGHT_ON_DECK_TEST, NINE_ON_DECK_TEST, TEN_ON_DECK_TEST, JACK_ON_DECK_TEST, QUEEN_ON_DECK_TEST, KING_ON_DECK_TEST, ACE_ON_DECK_TEST];

describe('ClassDeckOnDeckTest Class', () => {
  describe('Default properties', () => {
    const LABEL = 'new hand';
    const MAX_CARDS = 40;
    let myDeck;

    beforeEach(() => {
      myDeck = new ClassDeckOnDeckTest(LABEL, MAX_CARDS);
    });

    it('ClassDeckOnDeckTest has a label', () => {
      expectOnDeckTest(myDeck).to.have.property('label');
      expectOnDeckTest(myDeck.label).to.be.a('string');
      expectOnDeckTest(myDeck.label).to.be.equal(LABEL);
    });

    it('ClassDeckOnDeckTest has a max number of cards', () => {
      expectOnDeckTest(myDeck).to.have.property('maxCards');
      expectOnDeckTest(myDeck.maxCards).to.be.a('number');
      expectOnDeckTest(myDeck.maxCards).to.be.equal(SUITS_ON_DECK_TEST.length * RANKS_ON_DECK_TEST.length);
    });


    it('ClassDeckOnDeckTest has an array of cards', () => {
      expectOnDeckTest(myDeck).to.have.property('cards');
      expectOnDeckTest(myDeck.cards).to.be.an('array');
      expectOnDeckTest(myDeck.cards.length).to.be.equal(SUITS_ON_DECK_TEST.length * RANKS_ON_DECK_TEST.length);
    });
  });

  describe('ClassDeckOnDeckTest to string', () => {
    const MY_DECK = new ClassDeckOnDeckTest();

    it('Default value', () => {
      expectOnDeckTest(MY_DECK.toString()).to.be.equal('Two of Clubs, Three of Clubs, Four of Clubs, Five of Clubs, Six of Clubs, Seven of Clubs, Eight of Clubs, Nine of Clubs, Ten of Clubs, Jack of Clubs, Queen of Clubs, King of Clubs, Ace of Clubs, Two of Diamonds, Three of Diamonds, Four of Diamonds, Five of Diamonds, Six of Diamonds, Seven of Diamonds, Eight of Diamonds, Nine of Diamonds, Ten of Diamonds, Jack of Diamonds, Queen of Diamonds, King of Diamonds, Ace of Diamonds, Two of Hearts, Three of Hearts, Four of Hearts, Five of Hearts, Six of Hearts, Seven of Hearts, Eight of Hearts, Nine of Hearts, Ten of Hearts, Jack of Hearts, Queen of Hearts, King of Hearts, Ace of Hearts, Two of Spades, Three of Spades, Four of Spades, Five of Spades, Six of Spades, Seven of Spades, Eight of Spades, Nine of Spades, Ten of Spades, Jack of Spades, Queen of Spades, King of Spades, Ace of Spades, ');
    });
  });

  describe('ClassDeckOnDeckTest methods', () => {
    const TWO_OF_CLUBS = new ClassCardOnDeckTest(CLUBS_ON_DECK_TEST, TWO_ON_DECK_TEST);

    let myDeck, myDeck2;

    beforeEach(() => {
      myDeck = new ClassDeckOnDeckTest();
      myDeck2 = new ClassDeckOnDeckTest();
    });

    it('Pop first card', () => {
      expectOnDeckTest(myDeck.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnDeckTest(myDeck.cards.length).to.be.equal(51);
    });

    it('Add a card', () => {
      expectOnDeckTest(myDeck.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      myDeck.addCard(TWO_OF_CLUBS);
      expectOnDeckTest(myDeck.cards[myDeck.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expectOnDeckTest(myDeck.cards.length).to.be.equal(52);
    });

    it('Shuffle cards', () => {
      expectOnDeckTest(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expectOnDeckTest(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
    });

    it('Sort cards', () => {
      expectOnDeckTest(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expectOnDeckTest(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
      myDeck.sort();
      expectOnDeckTest(myDeck.cards).to.be.deep.equal(myDeck2.cards);
    });

    it('Deal hands', () => {
      const NUM_OF_HANDS = 4;
      const NUM_OF_CARDS_BY_HAND = 5;
      let hands = [];
      for (let handsIterator = 0; handsIterator < NUM_OF_HANDS; handsIterator++) {
        hands.push(new ClassHandOnDeckTest('', NUM_OF_CARDS_BY_HAND))
      }
      hands = myDeck.dealHands(hands, NUM_OF_CARDS_BY_HAND);
      expectOnDeckTest(hands.length).to.be.equal(NUM_OF_HANDS);
      for (let cardsIterator = 0; cardsIterator < NUM_OF_CARDS_BY_HAND; cardsIterator++) {
        for (let handsIterator = 0; handsIterator < NUM_OF_HANDS; handsIterator++) {
          expectOnDeckTest(hands[handsIterator].cards.length).to.be.equal(NUM_OF_CARDS_BY_HAND);
          expectOnDeckTest(hands[handsIterator].cards[cardsIterator]).to.be.deep.equal(myDeck2.popCard());
        }
      }
    });
  });
});
