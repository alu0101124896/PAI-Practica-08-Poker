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

import { DeckTest as _DeckTest } from '../src/deck.js';
const DeckTest = _DeckTest;

describe('Deck Class', () => {
  describe('Default properties', () => {
    let myDeck;

    beforeEach(() => {
      myDeck = new DeckTest();
    });

    it('Deck has an array of cards', () => {
      expect(myDeck).to.have.property('cards');
      expect(myDeck.cards).to.be.an('array');
      expect(myDeck.cards.length).to.be.equal(4);
    });
  });

  describe('Card to string', () => {
    const myDeck = new DeckTest();

    it('Default values', () => {
      expect(myDeck.toString()).to.be.equal("Ace of Clubs\nTwo of Clubs\nThree of Clubs\nFour of Clubs\nFive of Clubs\nSix of Clubs\nSeven of Clubs\nEight of Clubs\nNine of Clubs\nTen of Clubs\nJack of Clubs\nQueen of Clubs\nKing of Clubs\nAce of Diamonds\nTwo of Diamonds\nThree of Diamonds\nFour of Diamonds\nFive of Diamonds\nSix of Diamonds\nSeven of Diamonds\nEight of Diamonds\nNine of Diamonds\nTen of Diamonds\nJack of Diamonds\nQueen of Diamonds\nKing of Diamonds\nAce of Hearts\nTwo of Hearts\nThree of Hearts\nFour of Hearts\nFive of Hearts\nSix of Hearts\nSeven of Hearts\nEight of Hearts\nNine of Hearts\nTen of Hearts\nJack of Hearts\nQueen of Hearts\nKing of Hearts\nAce of Spades\nTwo of Spades\nThree of Spades\nFour of Spades\nFive of Spades\nSix of Spades\nSeven of Spades\nEight of Spades\nNine of Spades\nTen of Spades\nJack of Spades\nQueen of Spades\nKing of Spades\n");
    });
  });
});
