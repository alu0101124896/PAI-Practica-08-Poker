/**
 * @file card-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the card class
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

const SPADES = 4;
const HEARTS = 3;
const DIAMONDS = 2;
const CLUBS = 1;

const ACE = 14;
const KING = 13;
const QUEEN = 12;
const JACK = 11;
const TEN = 10;
const NINE = 9;
const EIGHT = 8;
const SEVEN = 7;
const SIX = 6;
const FIVE = 5;
const FOUR = 4;
const THREE = 3;
const TWO = 2;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

describe('Card Class', () => {
  describe('Default properties', () => {
    const MY_CARD = new Card();

    it('Card has a suit', () => {
      expect(MY_CARD).to.have.property('suit');
      expect(MY_CARD.suit).to.be.a('number');
    });

    it('Card has a rank', () => {
      expect(MY_CARD).to.have.property('rank');
      expect(MY_CARD.rank).to.be.a('number');
    });

    it('Default suit is Clubs', () => {
      expect(MY_CARD.suit).to.be.equal(CLUBS);
    });

    it('Default rank is Two', () => {
      expect(MY_CARD.rank).to.be.equal(TWO);
    });
  });

  describe('Non default property values', () => {
    const MY_CARD = new Card(DIAMONDS, ACE)

    it('Modifies default suit correctly', () => {
      expect(MY_CARD.suit).to.be.equal(DIAMONDS);
    });

    it('Modifies default rank correctly', () => {
      expect(MY_CARD.rank).to.be.equal(ACE);
    });
  });

  describe('Card to string', () => {
    const MY_CARD = new Card();
    const MY_CARD_2 = new Card(DIAMONDS, ACE)

    it('Default values', () => {
      expect(MY_CARD.toString()).to.be.equal('Two of Clubs');
    });

    it('Modified values', () => {
      expect(MY_CARD_2.toString()).to.be.equal('Ace of Diamonds');
    });
  });

  describe('Compare', () => {
    const THREE_OF_SPADES = new Card(SPADES, THREE);
    const EIGHT_OF_DIAMONDS = new Card(DIAMONDS, EIGHT);
    const EIGHT_OF_SPADES = new Card(SPADES, EIGHT);

    it('Tree of Spades > Eight of Diamonds', () => {
      expect(Card.compare(THREE_OF_SPADES, EIGHT_OF_DIAMONDS)).to.be.deep.equal(THREE_OF_SPADES);
      expect(Card.compare(EIGHT_OF_DIAMONDS, THREE_OF_SPADES)).to.be.deep.equal(THREE_OF_SPADES);
    });


    it('Eight of Spades > Three of Spades', () => {
      expect(Card.compare(EIGHT_OF_SPADES, THREE_OF_SPADES)).to.be.deep.equal(EIGHT_OF_SPADES);
      expect(Card.compare(THREE_OF_SPADES, EIGHT_OF_SPADES)).to.be.deep.equal(EIGHT_OF_SPADES);
    });
  });
});
