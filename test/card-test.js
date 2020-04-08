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
    let myCard;

    beforeEach(() => {
      myCard = new Card();
    });

    it('Card has a suit', () => {
      expect(myCard).to.have.property('suit');
      expect(myCard.suit).to.be.a('string');
    });

    it('Card has a rank', () => {
      expect(myCard).to.have.property('rank');
      expect(myCard.rank).to.be.a('string');
    });

    it('Default suit is Clubs', () => {
      expect(myCard.suit).to.be.equal('C');
    });

    it('Default rank is Two', () => {
      expect(myCard.rank).to.be.equal('2');
    });
  });

  describe('Non default property values', () => {
    let myCard, suit, rank;

    beforeEach(() => {
      suit = 'D';
      rank = 'A';
      myCard = new Card(suit, rank)
    });

    it('Modifies default suit correctly', () => {
      expect(myCard.suit).to.be.equal(suit);
    });

    it('Modifies default rank correctly', () => {
      expect(myCard.rank).to.be.equal(rank);
    });
  });

  describe('Card to string', () => {
    const myCard = new Card();

    it('Default values', () => {
      expect(myCard.toString()).to.be.equal('Two of Clubs');
    });

    const suit = 'D';
    const rank = 'A';
    const myModifiedCard = new Card(suit, rank);

    it('Modified values', () => {
      expect(myModifiedCard.toString()).to.be.equal('Ace of Diamonds');
    });
  });

  describe('Compare', () => {
    const spades = 'S';
    const three = '3';
    const threeOfSpades = new Card(spades, three);

    const diamonds = 'D';
    const eight = '8';
    const eightOfDiamonds = new Card(diamonds, eight);

    it('Tree of Spades > Eight of Diamonds', () => {
      expect(Card.compare(threeOfSpades, eightOfDiamonds)).to.be.deep.equal(threeOfSpades);
      expect(Card.compare(eightOfDiamonds, threeOfSpades)).to.be.deep.equal(threeOfSpades);
    });

    const eightOfSpades = new Card(spades, eight);

    it('Eight of Spades > Three of Spades', () => {
      expect(Card.compare(eightOfSpades, threeOfSpades)).to.be.deep.equal(eightOfSpades);
      expect(Card.compare(threeOfSpades, eightOfSpades)).to.be.deep.equal(eightOfSpades);
    });
  });
});
