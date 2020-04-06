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

import { CardTest as _CardTest } from '../src/card.js';
const CardTest = _CardTest;

describe('Card Class', () => {
  describe('Default properties', () => {
    let myCard;

    beforeEach(() => {
      myCard = new CardTest();
    });

    it('Card has a suit', () => {
      expect(myCard).have.property('suit').that.is.a('string');
    });

    it('Card has a rank', () => {
      expect(myCard).have.property('rank').that.is.a('string');
    });

    it('Default suit is Clubs', () => {
      expect(myCard.suit).to.be.equal('Clubs');
    });

    it('Default rank is Two', () => {
      expect(myCard.rank).to.be.equal('2');
    });
  });

  describe('Not default property values', () => {
    let myCard, suit, rank;

    beforeEach(() => {
      suit = 'Diamonds';
      rank = 'A';
      myCard = new CardTest(suit, rank)
    });

    it('Modifies default suit correctly', () => {
      expect(myCard.suit).to.be.equal(suit);
    });

    it('Modifies default rank correctly', () => {
      expect(myCard.rank).to.be.equal(rank);
    });
  });

  describe('Card to string', () => {
    let myCard = new CardTest();

    it('Default values', () => {
      expect(myCard.toSrting()).to.be.equal('Two of Clubs');
    });
  });
});
