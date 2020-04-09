/**
 * @file poker-hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the poker hand class
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

import { PokerHand_ as _PokerHand } from '../src/poker-hand.js';
const PokerHand = _PokerHand;

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

describe('Poker Hand Class', () => {
  describe('Default inherited properties', () => {
    const LABEL = 'new hand';
    let myPokerHand;

    beforeEach(() => {
      myPokerHand = new PokerHand(LABEL);
    });

    it('Poker hand has an inherited label', () => {
      expect(myPokerHand).to.have.property('label');
      expect(myPokerHand.label).to.be.a('string');
      expect(myPokerHand.label).to.be.equal(LABEL);
    });

    it('Poker hand has an inherited array of cards', () => {
      expect(myPokerHand).to.have.property('cards');
      expect(myPokerHand.cards).to.be.an('array');
      expect(myPokerHand.cards.length).to.be.equal(0);
    });
  });

  describe('Poker hand inherited to string', () => {
    const MY_POKER_HAND = new PokerHand('new hand');

    it('Default value', () => {
      expect(MY_POKER_HAND.toString()).to.be.equal('');
    });
  });

  describe('Poker hand inherited methods', () => {
    const TWO_OF_CLUBS = new Card(CLUBS, TWO);
    const THREE_OF_CLUBS = new Card(CLUBS, THREE);

    let myDeck = new Deck();
    let myPokerHand = new PokerHand('new hand');

    it('Add a card', () => {
      myPokerHand.addCard(TWO_OF_CLUBS);
      expect(myPokerHand.cards[myPokerHand.cards.length - 1]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myPokerHand.cards.length).to.be.equal(1);
    });

    it('Pop a specific card', () => {
      expect(myPokerHand.popCard(TWO_OF_CLUBS)).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myPokerHand.cards.length).to.be.equal(0);
    });

    it('Move cards', () => {
      Hand.moveCards(myDeck, 2, myPokerHand);
      expect(myPokerHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myPokerHand.cards[1]).to.be.deep.equal(THREE_OF_CLUBS);
      expect(myPokerHand.cards.length).to.be.equal(2);
    });
  });

  describe('Poker hand methods', () => {
    let myPokerHand = new PokerHand('new hand');

    it('Has a pair', () => {
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(SPADES, EIGHT));
      expect(myPokerHand.cards.length).to.be.equal(2);
      expect(myPokerHand.hasPair()).to.be.equal(true);
    });
  });
});
