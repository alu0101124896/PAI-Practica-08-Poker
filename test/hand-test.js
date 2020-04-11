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

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

describe('Hand Class', () => {
  describe('Default properties', () => {
    const LABEL = 'my hand';
    const MAX_CARDS = 9;
    let myHand;

    beforeEach(() => {
      myHand = new Hand(LABEL, MAX_CARDS);
    });

    it('Hand has a label', () => {
      expect(myHand).to.have.property('label');
      expect(myHand.label).to.be.a('string');
      expect(myHand.label).to.be.equal(LABEL);
    });

    it('Hand has a max number of cards', () => {
      expect(myHand).to.have.property('maxCards');
      expect(myHand.maxCards).to.be.a('number');
      expect(myHand.maxCards).to.be.equal(MAX_CARDS);
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
    const FOUR_OF_CLUBS = new Card(CLUBS, FOUR);
    const FIVE_OF_CLUBS = new Card(CLUBS, FIVE);
    const SIX_OF_CLUBS = new Card(CLUBS, SIX);
    const SEVEN_OF_CLUBS = new Card(CLUBS, SEVEN);

    let myDeck = new Deck();
    let myHand = new Hand('new hand');
    let myHand2 = new Hand('new hand 2', 7);

    it('Add a card', () => {
      expect(myHand.addCard(TWO_OF_CLUBS)).to.be.equal(true);
      expect(myHand.addCard(THREE_OF_CLUBS)).to.be.equal(true);
      expect(myHand.addCard(FOUR_OF_CLUBS)).to.be.equal(true);
      expect(myHand.addCard(FIVE_OF_CLUBS)).to.be.equal(true);
      expect(myHand.addCard(SIX_OF_CLUBS)).to.be.equal(true);
      expect(myHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(SIX_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(5);
    });

    it('Add a card when hand is full', () => {
      expect(myHand.addCard(SEVEN_OF_CLUBS)).to.be.equal(false);
      expect(myHand.cards[myHand.cards.length - 1]).to.be.deep.equal(SIX_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(5);
    });

    it('Add a "false" card', () => {
      expect(myHand.addCard(false)).to.be.equal(false);
      expect(myHand.cards.length).to.be.equal(5);
    });

    it('Remove a specific card', () => {
      expect(myHand.removeCard(FIVE_OF_CLUBS)).to.be.deep.equal(FIVE_OF_CLUBS);
      expect(myHand.removeCard(THREE_OF_CLUBS)).to.be.deep.equal(THREE_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(3);
    });

    it('Pop a card', () => {
      expect(myHand.popCard()).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.popCard()).to.be.deep.equal(FOUR_OF_CLUBS);
      expect(myHand.popCard()).to.be.deep.equal(SIX_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(0);
    });

    it('Remove a card when hand is empty', () => {
      expect(myHand.removeCard(THREE_OF_CLUBS)).to.be.equal(false);
      expect(myHand.cards.length).to.be.equal(0);
    });

    it('Pop a card when hand is empty', () => {
      expect(myHand.popCard()).to.be.equal(false);
      expect(myHand.cards.length).to.be.equal(0);
    });

    it('Move cards', () => {
      Hand.moveCards(myDeck, 5, myHand);
      expect(myHand.cards[0]).to.be.deep.equal(TWO_OF_CLUBS);
      expect(myHand.cards[1]).to.be.deep.equal(THREE_OF_CLUBS);
      expect(myHand.cards.length).to.be.equal(5);
    });

    it('Move a card when source hand is empty', () => {
      Hand.moveCards(myHand, 6, myHand2);
      expect(myHand.cards.length).to.be.equal(0);
    });

    it('Move a card when destiny hand is full', () => {
      Hand.moveCards(myDeck, 3, myHand2);
      expect(myHand2.cards.length).to.be.equal(7);
    });
  });
});
