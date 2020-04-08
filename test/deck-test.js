/**
 * @file deck-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the deck class
 */

"use strict";

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

import { Deck_ as _Deck } from '../src/deck.js';
const Deck = _Deck;

describe('Deck Class', () => {
  describe('Default properties', () => {
    let myDeck;

    beforeEach(() => {
      myDeck = new Deck();
    });

    it('Deck has an array of cards', () => {
      expect(myDeck).to.have.property('cards');
      expect(myDeck.cards).to.be.an('array');
      expect(myDeck.cards.length).to.be.equal(52);
    });
  });

  describe('Deck to string', () => {
    const MY_DECK = new Deck();

    it('Default value', () => {
      expect(MY_DECK.toString()).to.be.equal('Two of Clubs\nThree of Clubs\nFour of Clubs\nFive of Clubs\nSix of Clubs\nSeven of Clubs\nEight of Clubs\nNine of Clubs\nTen of Clubs\nJack of Clubs\nQueen of Clubs\nKing of Clubs\nAce of Clubs\nTwo of Diamonds\nThree of Diamonds\nFour of Diamonds\nFive of Diamonds\nSix of Diamonds\nSeven of Diamonds\nEight of Diamonds\nNine of Diamonds\nTen of Diamonds\nJack of Diamonds\nQueen of Diamonds\nKing of Diamonds\nAce of Diamonds\nTwo of Hearts\nThree of Hearts\nFour of Hearts\nFive of Hearts\nSix of Hearts\nSeven of Hearts\nEight of Hearts\nNine of Hearts\nTen of Hearts\nJack of Hearts\nQueen of Hearts\nKing of Hearts\nAce of Hearts\nTwo of Spades\nThree of Spades\nFour of Spades\nFive of Spades\nSix of Spades\nSeven of Spades\nEight of Spades\nNine of Spades\nTen of Spades\nJack of Spades\nQueen of Spades\nKing of Spades\nAce of Spades\n');
    });
  });

  describe('Deck methods', () => {
    const CLUBS = 'C';
    const TWO = '2';
    const TWO_OF_CLUBS = new Card(CLUBS, TWO);

    let myDeck;

    beforeEach(() => {
      myDeck = new Deck();
    });

    it('Add a card', () => {
      myDeck.addCard(TWO_OF_CLUBS);
      expect(myDeck.cards[myDeck.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myDeck.cards.length).to.be.equal(53);
    });

    it('Pop first card', () => {
      expect(myDeck.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myDeck.cards.length).to.be.equal(51);
    });

    it('Shuffle cards', () => {
      const myDeck2 = new Deck();
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expect(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
    });

    it('Sort cards', () => {
      const myDeck2 = new Deck();
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
      myDeck.shuffle();
      expect(myDeck.cards).to.not.be.deep.equal(myDeck2.cards);
      myDeck.sort();
      expect(myDeck.cards).to.be.deep.equal(myDeck2.cards);
    });

    it('Deal hands', () => {
      const NUM_OF_HANDS = 4;
      const NUM_OF_CARDS_BY_HAND = 5;
      const HANDS = myDeck.dealHands(NUM_OF_HANDS, NUM_OF_CARDS_BY_HAND);
      expect(HANDS.length).to.be.equal(NUM_OF_HANDS);
      expect(HANDS[0].cards.length).to.be.equal(NUM_OF_CARDS_BY_HAND);
    });
  });
});
