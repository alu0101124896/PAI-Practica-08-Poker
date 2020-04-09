/**
 * @file poker-hand.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a poker hand class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { Card_ as _Card } from './card.js';
const Card = _Card;

import { Hand_ as _Hand } from './hand.js';
const Hand = _Hand;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

/**
 * @description Class representing a poker hand of 7 cards
 *
 * @class PokerHand
 */
class PokerHand extends Hand {

  /**
   * @description Constructor that creates an instance of a poker hand.
   *
   * @memberof PokerHand
   */
  constructor(label = '') {
    super(label);
  }

  /**
   * @description Function that searchs for a pair in the hand
   *
   * @returns {boolean} Returns true if a pair is found
   * @memberof PokerHand
   */
  hasPair() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 1; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length; secondCardIterator++) {
        if (this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * @description Function that searchs for two pairs in the hand
   *
   * @returns {boolean} Returns true if two pairs are found
   * @memberof PokerHand
   */
  hasTwoPairs() {
    let foundPairs = 0;
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 1; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length; secondCardIterator++) {
        if (this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) {
          foundPairs++;
        }
      }
    }
    if (foundPairs >= 2) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @description Function that searchs for three of a kind in the hand
   *
   * @returns {boolean} Returns true if three of a kind are found
   * @memberof PokerHand
   */
  hasThreeOfaKind() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 2; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length - 1; secondCardIterator++) {
        for (let thirdCardIterator = firstCardIterator + 2; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          if ((this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) && (this.cards[firstCardIterator].suit === this.cards[thirdCardIterator].suit)) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

export const PokerHand_ = PokerHand;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑
