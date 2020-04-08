/**
 * @file hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the hand class
 */

"use strict";

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

import { Deck_ as _Deck } from '../src/deck.js';
const Deck = _Deck;

import { Hand_ as _Hand } from '../src/hand.js';
const Hand = _Hand;

describe('Hand Class', () => {
  describe('Default properties', () => {
    let myHand;

    beforeEach(() => {
      myHand = new Hand('new hand');
    });

    it('Hand has a label', () => {
      expect(myHand).to.have.property('label');
      expect(myHand.label).to.be.a('string');
    });

    it('Hand has an array of cards', () => {
      expect(myHand).to.have.property('cards');
      expect(myHand.cards).to.be.an('array');
      expect(myHand.cards.length).to.be.equal(0);
    });
  });

  describe('Hand to string', () => {
    const myHand = new Hand('new hand');

    it('Default value', () => {
      expect(myHand.toString()).to.be.equal('');
    });
  });

  describe('Hand methods', () => {
    const clubs = 'C';
    const two = '2';
    const twoOfClubs = new Card(clubs, two);

    let myHand;

    beforeEach(() => {
      myHand = new Hand('new hand');
    });

    it('Add a card', () => {
      myHand.addCard(twoOfClubs);
      expect(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(twoOfClubs);
      expect(myHand.cards.length).to.be.equal(1);
    });
  });
});
