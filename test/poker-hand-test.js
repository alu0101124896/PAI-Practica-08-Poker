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

// import { expect as _expect } from 'chai';
// const expect = _expect;

// import { Card_ as _Card } from '../src/card.js';
// const Card = _Card;

// import { Deck_ as _Deck } from '../src/deck.js';
// const Deck = _Deck;

// import { Hand_ as _Hand } from '../src/hand.js';
// const Hand = _Hand;

// import { PokerHand_ as _PokerHand } from '../src/poker-hand.js';
// const PokerHand = _PokerHand;

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

  describe('Poker hand', () => {
    let myPokerHand;

    beforeEach(() => {
      myPokerHand = new PokerHand('new hand');
    });

    it('Has a pair', () => {
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(HEARTS, THREE));
      expect(myPokerHand.cards.length).to.be.equal(2);
      expect(myPokerHand.hasPair()).to.be.equal(true);
    });

    it('Has not a pair', () => {
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(HEARTS, SIX));
      expect(myPokerHand.cards.length).to.be.equal(2);
      expect(myPokerHand.hasPair()).to.be.equal(false);
    });

    it('Has two pairs', () => {
      myPokerHand.addCard(new Card(SPADES, FIVE));
      myPokerHand.addCard(new Card(DIAMONDS, ACE));
      myPokerHand.addCard(new Card(CLUBS, ACE));
      myPokerHand.addCard(new Card(HEARTS, FIVE));
      expect(myPokerHand.cards.length).to.be.equal(4);
      expect(myPokerHand.hasTwoPairs()).to.be.equal(true);
    });

    it('Has not two pairs', () => {
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(DIAMONDS, ACE));
      myPokerHand.addCard(new Card(CLUBS, ACE));
      myPokerHand.addCard(new Card(HEARTS, FIVE));
      expect(myPokerHand.cards.length).to.be.equal(4);
      expect(myPokerHand.hasTwoPairs()).to.be.equal(false);
    });

    it('Has three of a kind', () => {
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(3);
      expect(myPokerHand.hasThreeOfaKind()).to.be.equal(true);
    });

    it('Has not three of a kind', () => {
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, KING));
      myPokerHand.addCard(new Card(HEARTS, JACK));
      expect(myPokerHand.cards.length).to.be.equal(3);
      expect(myPokerHand.hasThreeOfaKind()).to.be.equal(false);
    });

    it('Has a straight', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, SEVEN));
      myPokerHand.addCard(new Card(DIAMONDS, FIVE));
      myPokerHand.addCard(new Card(HEARTS, THREE));
      myPokerHand.addCard(new Card(SPADES, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraight()).to.be.equal(true);
    });

    it('Has a special case of a straight', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, TWO));
      myPokerHand.addCard(new Card(CLUBS, FIVE));
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(HEARTS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraight()).to.be.equal(true);
    });

    it('Has not a straight', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, SEVEN));
      myPokerHand.addCard(new Card(DIAMONDS, EIGHT));
      myPokerHand.addCard(new Card(HEARTS, THREE));
      myPokerHand.addCard(new Card(SPADES, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraight()).to.be.equal(false);
    });

    it('Has a flush', () => {
      myPokerHand.addCard(new Card(HEARTS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(HEARTS, KING));
      myPokerHand.addCard(new Card(HEARTS, SEVEN));
      myPokerHand.addCard(new Card(HEARTS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasFlush()).to.be.equal(true);
    });

    it('Has not a flush', () => {
      myPokerHand.addCard(new Card(SPADES, FOUR));
      myPokerHand.addCard(new Card(DIAMONDS, NINE));
      myPokerHand.addCard(new Card(CLUBS, KING));
      myPokerHand.addCard(new Card(HEARTS, SEVEN));
      myPokerHand.addCard(new Card(CLUBS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasFlush()).to.be.equal(false);
    });

    it('Has a full house', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, NINE));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasFullHouse()).to.be.equal(true);
    });

    it('Has not a full house because of the three of a kind', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, TWO));
      myPokerHand.addCard(new Card(CLUBS, NINE));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasFullHouse()).to.be.equal(false);
    });

    it('Has not a full house because of the pair', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, FIVE));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasFullHouse()).to.be.equal(false);
    });

    it('Has four of a kind', () => {
      myPokerHand.addCard(new Card(HEARTS, JACK));
      myPokerHand.addCard(new Card(DIAMONDS, JACK));
      myPokerHand.addCard(new Card(CLUBS, JACK));
      myPokerHand.addCard(new Card(SPADES, JACK));
      expect(myPokerHand.cards.length).to.be.equal(4);
      expect(myPokerHand.hasFourOfaKind()).to.be.equal(true);
    });

    it('Has not four of a kind', () => {
      myPokerHand.addCard(new Card(HEARTS, KING));
      myPokerHand.addCard(new Card(DIAMONDS, JACK));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(SPADES, JACK));
      expect(myPokerHand.cards.length).to.be.equal(4);
      expect(myPokerHand.hasFourOfaKind()).to.be.equal(false);
    });

    it('Has a straigt flush', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(DIAMONDS, SEVEN));
      myPokerHand.addCard(new Card(DIAMONDS, FIVE));
      myPokerHand.addCard(new Card(DIAMONDS, EIGHT));
      myPokerHand.addCard(new Card(DIAMONDS, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraightFlush()).to.be.equal(true);
    });

    it('Has a special case of a straight flush', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(DIAMONDS, TWO));
      myPokerHand.addCard(new Card(DIAMONDS, FIVE));
      myPokerHand.addCard(new Card(DIAMONDS, THREE));
      myPokerHand.addCard(new Card(DIAMONDS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraightFlush()).to.be.equal(true);
    });

    it('Has not a straigt flush because of the straight', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(DIAMONDS, TWO));
      myPokerHand.addCard(new Card(DIAMONDS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, EIGHT));
      myPokerHand.addCard(new Card(DIAMONDS, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraightFlush()).to.be.equal(false);
    });

    it('Has not a straigt flush because of the flush', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(SPADES, SEVEN));
      myPokerHand.addCard(new Card(DIAMONDS, FIVE));
      myPokerHand.addCard(new Card(HEARTS, EIGHT));
      myPokerHand.addCard(new Card(DIAMONDS, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasStraightFlush()).to.be.equal(false);
    });

    it('Has royal flush', () => {
      myPokerHand.addCard(new Card(SPADES, TEN));
      myPokerHand.addCard(new Card(SPADES, QUEEN));
      myPokerHand.addCard(new Card(SPADES, ACE));
      myPokerHand.addCard(new Card(SPADES, JACK));
      myPokerHand.addCard(new Card(SPADES, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasRoyalFlush()).to.be.equal(true);
    });

    it('Has not a royal flush because of the straight', () => {
      myPokerHand.addCard(new Card(SPADES, TEN));
      myPokerHand.addCard(new Card(SPADES, QUEEN));
      myPokerHand.addCard(new Card(SPADES, NINE));
      myPokerHand.addCard(new Card(SPADES, JACK));
      myPokerHand.addCard(new Card(SPADES, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasRoyalFlush()).to.be.equal(false);
    });

    it('Has not a royal flush because of the flush', () => {
      myPokerHand.addCard(new Card(SPADES, TEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(SPADES, ACE));
      myPokerHand.addCard(new Card(SPADES, JACK));
      myPokerHand.addCard(new Card(DIAMONDS, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      expect(myPokerHand.hasRoyalFlush()).to.be.equal(false);
    });

    it('Classifies anything', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, FOUR));
      myPokerHand.addCard(new Card(CLUBS, THREE));
      myPokerHand.addCard(new Card(HEARTS, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('');
    });

    it('Classifies a pair', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, THREE));
      myPokerHand.addCard(new Card(HEARTS, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Pair');
    });

    it('Classifies two pairs', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, FOUR));
      myPokerHand.addCard(new Card(CLUBS, NINE));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Two Pairs');
    });

    it('Classifies three of a kind', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, SEVEN));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Three of a Kind');
    });

    it('Classifies a straight', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, TWO));
      myPokerHand.addCard(new Card(CLUBS, FIVE));
      myPokerHand.addCard(new Card(SPADES, THREE));
      myPokerHand.addCard(new Card(HEARTS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Straight');
    });

    it('Classifies a flush', () => {
      myPokerHand.addCard(new Card(HEARTS, FOUR));
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(HEARTS, KING));
      myPokerHand.addCard(new Card(HEARTS, SEVEN));
      myPokerHand.addCard(new Card(HEARTS, ACE));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Flush');
    });

    it('Classifies a full house', () => {
      myPokerHand.addCard(new Card(HEARTS, NINE));
      myPokerHand.addCard(new Card(DIAMONDS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, QUEEN));
      myPokerHand.addCard(new Card(CLUBS, NINE));
      myPokerHand.addCard(new Card(HEARTS, QUEEN));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Full House');
    });

    it('Classifies four of a kind', () => {
      myPokerHand.addCard(new Card(HEARTS, KING));
      myPokerHand.addCard(new Card(DIAMONDS, KING));
      myPokerHand.addCard(new Card(CLUBS, KING));
      myPokerHand.addCard(new Card(CLUBS, NINE));
      myPokerHand.addCard(new Card(HEARTS, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Four of a Kind');
    });

    it('Classifies a straight flush', () => {
      myPokerHand.addCard(new Card(DIAMONDS, FOUR));
      myPokerHand.addCard(new Card(DIAMONDS, SEVEN));
      myPokerHand.addCard(new Card(DIAMONDS, FIVE));
      myPokerHand.addCard(new Card(DIAMONDS, EIGHT));
      myPokerHand.addCard(new Card(DIAMONDS, SIX));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Straight Flush');
    });

    it('Classifies a royal flush', () => {
      myPokerHand.addCard(new Card(SPADES, TEN));
      myPokerHand.addCard(new Card(SPADES, QUEEN));
      myPokerHand.addCard(new Card(SPADES, ACE));
      myPokerHand.addCard(new Card(SPADES, JACK));
      myPokerHand.addCard(new Card(SPADES, KING));
      expect(myPokerHand.cards.length).to.be.equal(5);
      myPokerHand.classify();
      expect(myPokerHand.label).to.be.equal('Royal Flush');
    });

    it('Statistics of sorted deck', () => {
      let statisticResults = PokerHand.statistics(5, 7, 10);
      expect(statisticResults).to.be.an('array');
      expect(statisticResults.length).to.be.equal(10);
    });
  });
});
