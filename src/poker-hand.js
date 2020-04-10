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

const ACE = 14;
const TWO = 2;

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
  constructor(label = '', maxCards = 7) {
    super(label, maxCards);
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
        if (this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) {
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
        if (this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) {
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
        for (let thirdCardIterator = secondCardIterator + 1; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          if ((this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) &&
            (this.cards[firstCardIterator].rank === this.cards[thirdCardIterator].rank)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * @description Function that searchs for a straight in the hand
   *
   * @returns {boolean} Returns true if a straight is found
   * @memberof PokerHand
   */
  hasStraight() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length; firstCardIterator++) {
      for (let secondCardIterator = 0; secondCardIterator < this.cards.length; secondCardIterator++) {
        for (let thirdCardIterator = 0; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          for (let fourthCardIterator = 0; fourthCardIterator < this.cards.length; fourthCardIterator++) {
            for (let fifthCardIterator = 0; fifthCardIterator < this.cards.length; fifthCardIterator++) {
              if ((this.cards[firstCardIterator].rank === (this.cards[secondCardIterator].rank - 1)) &&
                (this.cards[secondCardIterator].rank === (this.cards[thirdCardIterator].rank - 1)) &&
                (this.cards[thirdCardIterator].rank === (this.cards[fourthCardIterator].rank - 1)) &&
                (this.cards[fourthCardIterator].rank === (this.cards[fifthCardIterator].rank - 1))) {
                return true;
              } else if ((this.cards[firstCardIterator].rank === ACE) &&
                (this.cards[secondCardIterator].rank === TWO) &&
                (this.cards[secondCardIterator].rank === (this.cards[thirdCardIterator].rank - 1)) &&
                (this.cards[thirdCardIterator].rank === (this.cards[fourthCardIterator].rank - 1)) &&
                (this.cards[fourthCardIterator].rank === (this.cards[fifthCardIterator].rank - 1))) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * @description Function that searchs for a flush in the hand
   *
   * @returns {boolean} Returns true if a flush is found
   * @memberof PokerHand
   */
  hasFlush() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length; firstCardIterator++) {
      for (let secondCardIterator = 0; secondCardIterator < this.cards.length; secondCardIterator++) {
        for (let thirdCardIterator = 0; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          for (let fourthCardIterator = 0; fourthCardIterator < this.cards.length; fourthCardIterator++) {
            for (let fifthCardIterator = 0; fifthCardIterator < this.cards.length; fifthCardIterator++) {
              if ((this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) &&
                (this.cards[secondCardIterator].suit === this.cards[thirdCardIterator].suit) &&
                (this.cards[thirdCardIterator].suit === this.cards[fourthCardIterator].suit) &&
                (this.cards[fourthCardIterator].suit === this.cards[fifthCardIterator].suit)) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * @description Function that searchs for a full house in the hand
   *
   * @returns {boolean} Returns true if a full house is found
   * @memberof PokerHand
   */
  hasFullHouse() {
    let tempHand = new Hand();
    let trio = false;
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 2; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length - 1; secondCardIterator++) {
        for (let thirdCardIterator = secondCardIterator + 1; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          if ((this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) &&
            (this.cards[firstCardIterator].rank === this.cards[thirdCardIterator].rank)) {
            tempHand.addCard(this.removeCard(this.cards[thirdCardIterator]));
            tempHand.addCard(this.removeCard(this.cards[secondCardIterator]));
            tempHand.addCard(this.removeCard(this.cards[firstCardIterator]));
            trio = true;
          }
        }
      }
    }
    if (trio) {
      for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 1; firstCardIterator++) {
        for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length; secondCardIterator++) {
          if (this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) {
            this.addCard(tempHand.popCard());
            this.addCard(tempHand.popCard());
            this.addCard(tempHand.popCard());
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * @description Function that searchs for four of a kind in the hand
   *
   * @returns {boolean} Returns true if four of a kind are found
   * @memberof PokerHand
   */
  hasFourOfaKind() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 3; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length - 2; secondCardIterator++) {
        for (let thirdCardIterator = secondCardIterator + 1; thirdCardIterator < this.cards.length - 1; thirdCardIterator++) {
          for (let fourthCardIterator = thirdCardIterator + 1; fourthCardIterator < this.cards.length; fourthCardIterator++) {
            if ((this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) &&
              (this.cards[secondCardIterator].rank === this.cards[thirdCardIterator].rank) &&
              (this.cards[thirdCardIterator].rank === this.cards[fourthCardIterator].rank)) {
              return true;
            }
          }
        }
      }
      return false;
    }
  }

  /**
   * @description Function that searchs for a flush in the hand
   *
   * @returns {boolean} Returns true if a flush is found
   * @memberof PokerHand
   */
  hasStraightFlush() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length; firstCardIterator++) {
      for (let secondCardIterator = 0; secondCardIterator < this.cards.length; secondCardIterator++) {
        for (let thirdCardIterator = 0; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          for (let fourthCardIterator = 0; fourthCardIterator < this.cards.length; fourthCardIterator++) {
            for (let fifthCardIterator = 0; fifthCardIterator < this.cards.length; fifthCardIterator++) {
              if ((this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) &&
                (this.cards[secondCardIterator].suit === this.cards[thirdCardIterator].suit) &&
                (this.cards[thirdCardIterator].suit === this.cards[fourthCardIterator].suit) &&
                (this.cards[fourthCardIterator].suit === this.cards[fifthCardIterator].suit)) {
                if ((this.cards[firstCardIterator].rank === (this.cards[secondCardIterator].rank - 1)) &&
                  (this.cards[secondCardIterator].rank === (this.cards[thirdCardIterator].rank - 1)) &&
                  (this.cards[thirdCardIterator].rank === (this.cards[fourthCardIterator].rank - 1)) &&
                  (this.cards[fourthCardIterator].rank === (this.cards[fifthCardIterator].rank - 1))) {
                  return true;
                } else if ((this.cards[firstCardIterator].rank === ACE) &&
                  (this.cards[secondCardIterator].rank === TWO) &&
                  (this.cards[secondCardIterator].rank === (this.cards[thirdCardIterator].rank - 1)) &&
                  (this.cards[thirdCardIterator].rank === (this.cards[fourthCardIterator].rank - 1)) &&
                  (this.cards[fourthCardIterator].rank === (this.cards[fifthCardIterator].rank - 1))) {
                  return true;
                }
              }
            }
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
