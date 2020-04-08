/**
 * @file card-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the card class
 */

"use strict";

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

describe('Card Class', () => {
  describe('Default properties', () => {
    const MY_CARD = new Card();

    it('Card has a suit', () => {
      expect(MY_CARD).to.have.property('suit');
      expect(MY_CARD.suit).to.be.a('string');
    });

    it('Card has a rank', () => {
      expect(MY_CARD).to.have.property('rank');
      expect(MY_CARD.rank).to.be.a('string');
    });

    it('Default suit is Clubs', () => {
      expect(MY_CARD.suit).to.be.equal('C');
    });

    it('Default rank is Two', () => {
      expect(MY_CARD.rank).to.be.equal('2');
    });
  });

  describe('Non default property values', () => {
    const DIAMONDS = 'D';
    const ACE = 'A';
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

    it('Default values', () => {
      expect(MY_CARD.toString()).to.be.equal('Two of Clubs');
    });

    const DIAMONDS = 'D';
    const ACE = 'A';
    const MY_CARD_2 = new Card(DIAMONDS, ACE)

    it('Modified values', () => {
      expect(MY_CARD_2.toString()).to.be.equal('Ace of Diamonds');
    });
  });

  describe('Compare', () => {
    const SPADES = 'S';
    const THREE = '3';
    const THREE_OF_SPADES = new Card(SPADES, THREE);

    const DIAMONDS = 'D';
    const EIGHT = '8';
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
