/**
 * @file deck-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the deck class
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

// import { expect as _expect } from 'chai';
// const expect = _expect;

// import { Card_ as _Card } from '../src/card.js';
// const Card = _Card;

// import { Deck_ as _Deck } from '../src/deck.js';
// const Deck = _Deck;

// import { Hand_ as _Hand } from '../src/hand.js';
// const Hand = _Hand;

// const SPADES = 4;
// const HEARTS = 3;
// const DIAMONDS = 2;
// const CLUBS = 1;

// const ACE = 14;
// const KING = 13;
// const QUEEN = 12;
// const JACK = 11;
// const TEN = 10;
// const NINE = 9;
// const EIGHT = 8;
// const SEVEN = 7;
// const SIX = 6;
// const FIVE = 5;
// const FOUR = 4;
// const THREE = 3;
// const TWO = 2;

// const SUITS = [CLUBS, DIAMONDS, HEARTS, SPADES];
// const RANKS = [TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE];

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

describe('Deck Class', () => {
  describe('Default properties', () => {
    const LABEL = 'new hand';
    const MAX_CARDS = 40;
    let myDeck;

    beforeEach(() => {
      myDeck = new Deck(LABEL, MAX_CARDS);
    });

    it('Deck has a label', () => {
      expect(myDeck).to.have.property('label');
      expect(myDeck.label).to.be.a('string');
      expect(myDeck.label).to.be.equal(LABEL);
    });

    it('Deck has a max number of cards', () => {
      expect(myDeck).to.have.property('maxCards');
      expect(myDeck.maxCards).to.be.a('number');
      expect(myDeck.maxCards).to.be.equal(SUITS.length * RANKS.length);
    });


    it('Deck has an array of cards', () => {
      expect(myDeck).to.have.property('cards');
      expect(myDeck.cards).to.be.an('array');
      expect(myDeck.cards.length).to.be.equal(SUITS.length * RANKS.length);
    });
  });

  describe('Deck to string', () => {
    const MY_DECK = new Deck();

    it('Default value', () => {
      expect(MY_DECK.toString()).to.be.equal('Two of Clubs, Three of Clubs, Four of Clubs, Five of Clubs, Six of Clubs, Seven of Clubs, Eight of Clubs, Nine of Clubs, Ten of Clubs, Jack of Clubs, Queen of Clubs, King of Clubs, Ace of Clubs, Two of Diamonds, Three of Diamonds, Four of Diamonds, Five of Diamonds, Six of Diamonds, Seven of Diamonds, Eight of Diamonds, Nine of Diamonds, Ten of Diamonds, Jack of Diamonds, Queen of Diamonds, King of Diamonds, Ace of Diamonds, Two of Hearts, Three of Hearts, Four of Hearts, Five of Hearts, Six of Hearts, Seven of Hearts, Eight of Hearts, Nine of Hearts, Ten of Hearts, Jack of Hearts, Queen of Hearts, King of Hearts, Ace of Hearts, Two of Spades, Three of Spades, Four of Spades, Five of Spades, Six of Spades, Seven of Spades, Eight of Spades, Nine of Spades, Ten of Spades, Jack of Spades, Queen of Spades, King of Spades, Ace of Spades, ');
    });
  });

  describe('Deck methods', () => {
    const TWO_OF_CLUBS = new Card(CLUBS, TWO);

    let myDeck, myDeck2;

    beforeEach(() => {
      myDeck = new Deck();
      myDeck2 = new Deck();
    });

    it('Pop first card', () => {
      expect(myDeck.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myDeck.cards.length).to.be.equal(51);
    });

    it('Add a card', () => {
      expect(myDeck.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      myDeck.addCard(TWO_OF_CLUBS);
      expect(myDeck.cards[myDeck.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myDeck.cards.length).to.be.equal(52);
    });

    it('Shuffle cards', () => {
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expect(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
    });

    it('Sort cards', () => {
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expect(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
      myDeck.sort();
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
    });

    it('Deal hands', () => {
      const NUM_OF_HANDS = 4;
      const NUM_OF_CARDS_BY_HAND = 5;
      let hands = [];
      for (let handsIterator = 0; handsIterator < NUM_OF_HANDS; handsIterator++) {
        hands.push(new Hand('', NUM_OF_CARDS_BY_HAND))
      }
      hands = myDeck.dealHands(hands, NUM_OF_CARDS_BY_HAND);
      expect(hands.length).to.be.equal(NUM_OF_HANDS);
      for (let cardsIterator = 0; cardsIterator < NUM_OF_CARDS_BY_HAND; cardsIterator++) {
        for (let handsIterator = 0; handsIterator < NUM_OF_HANDS; handsIterator++) {
          expect(hands[handsIterator].cards.length).to.be.equal(NUM_OF_CARDS_BY_HAND);
          expect(hands[handsIterator].cards[cardsIterator]).to.be.deep.equal(myDeck2.popCard());
        }
      }
    });
  });
});
