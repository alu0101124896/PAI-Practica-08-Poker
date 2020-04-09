/**
 * @file hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the hand class
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

import { Deck_ as _Deck } from '../src/deck.js';
const Deck = _Deck;

import { Hand_ as _Hand } from '../src/hand.js';
const Hand = _Hand;

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
    const MY_HAND = new Hand('new hand');

    it('Default value', () => {
      expect(MY_HAND.toString()).to.be.equal('');
    });
  });

  describe('Hand methods', () => {
    const TWO_OF_CLUBS = new Card(CLUBS, TWO);
    const THREE_OF_CLUBS = new Card(CLUBS, THREE);

    let myDeck = new Deck();
    let myHand = new Hand('new hand');

    it('Add a card', () => {
      myHand.addCard(TWO_OF_CLUBS);
      expect(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(1);
    });

    it('Pop a specific card', () => {
      expect(myHand.popCard(TWO_OF_CLUBS)).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(0);
    });

    it('Move cards', () => {
      Hand.moveCards(myDeck, 2, myHand);
      expect(myHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.cards[1]).to.be.deep.equal(THREE_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(2);
    });
  });
});
