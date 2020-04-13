/**
 * @file poker-hand.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a poker hand class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

let ClassDeckOnPokerHand;
let ClassHandOnPokerHand;
if (typeof require !== 'undefined') { // Execution in node
  ClassDeckOnPokerHand = require('./deck.js').Deck;
  ClassHandOnPokerHand = require('./hand.js').Hand;
} else { // Execution in browser
  ClassDeckOnPokerHand = Deck;
  ClassHandOnPokerHand = Hand;
}

if (typeof require !== 'undefined') { // Execution in node
} else { // Execution in browser
}

const ACE_ON_POKER_HAND = 14;
const KING_ON_POKER_HAND = 13;
const QUEEN_ON_POKER_HAND = 12;
const JACK_ON_POKER_HAND = 11;
const TEN_ON_POKER_HAND = 10;
const TWO_ON_POKER_HAND = 2;

/**
 * @description Class representing a poker hand of 7 cards
 *
 * @class PokerHand
 */
class PokerHand extends ClassHandOnPokerHand {

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
            (this.cards[secondCardIterator].rank === this.cards[thirdCardIterator].rank)) {
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
              } else if ((this.cards[firstCardIterator].rank === ACE_ON_POKER_HAND) &&
                (this.cards[secondCardIterator].rank === TWO_ON_POKER_HAND) &&
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
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 4; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length - 3; secondCardIterator++) {
        for (let thirdCardIterator = secondCardIterator + 1; thirdCardIterator < this.cards.length - 2; thirdCardIterator++) {
          for (let fourthCardIterator = thirdCardIterator + 1; fourthCardIterator < this.cards.length - 1; fourthCardIterator++) {
            for (let fifthCardIterator = fourthCardIterator + 1; fifthCardIterator < this.cards.length; fifthCardIterator++) {
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
    let tempHand = new PokerHand();
    let threeOfaKind = false;
    let fullHouse = false;
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 2; firstCardIterator++) {
      for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length - 1; secondCardIterator++) {
        for (let thirdCardIterator = secondCardIterator + 1; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          if ((this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) &&
            (this.cards[firstCardIterator].rank === this.cards[thirdCardIterator].rank)) {
            tempHand.addCard(this.removeCard(this.cards[thirdCardIterator]));
            tempHand.addCard(this.removeCard(this.cards[secondCardIterator]));
            tempHand.addCard(this.removeCard(this.cards[firstCardIterator]));
            threeOfaKind = true;
          }
        }
      }
    }
    if (threeOfaKind) {
      for (let firstCardIterator = 0; firstCardIterator < this.cards.length - 1; firstCardIterator++) {
        for (let secondCardIterator = firstCardIterator + 1; secondCardIterator < this.cards.length; secondCardIterator++) {
          if (this.cards[firstCardIterator].rank === this.cards[secondCardIterator].rank) {
            fullHouse = true;
          }
        }
      }
    }
    if (threeOfaKind) {
      this.addCard(tempHand.popCard());
      this.addCard(tempHand.popCard());
      this.addCard(tempHand.popCard());
    }
    return fullHouse;
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
   * @description Function that searchs for a straight flush in the hand
   *
   * @returns {boolean} Returns true if a straight flush is found
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
                } else if ((this.cards[firstCardIterator].rank === ACE_ON_POKER_HAND) &&
                  (this.cards[secondCardIterator].rank === TWO_ON_POKER_HAND) &&
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

  /**
   * @description Function that searchs for a royal flush in the hand
   *
   * @returns {boolean} Returns true if a royal flush is found
   * @memberof PokerHand
   */
  hasRoyalFlush() {
    for (let firstCardIterator = 0; firstCardIterator < this.cards.length; firstCardIterator++) {
      for (let secondCardIterator = 0; secondCardIterator < this.cards.length; secondCardIterator++) {
        for (let thirdCardIterator = 0; thirdCardIterator < this.cards.length; thirdCardIterator++) {
          for (let fourthCardIterator = 0; fourthCardIterator < this.cards.length; fourthCardIterator++) {
            for (let fifthCardIterator = 0; fifthCardIterator < this.cards.length; fifthCardIterator++) {
              if ((this.cards[firstCardIterator].suit === this.cards[secondCardIterator].suit) &&
                (this.cards[secondCardIterator].suit === this.cards[thirdCardIterator].suit) &&
                (this.cards[thirdCardIterator].suit === this.cards[fourthCardIterator].suit) &&
                (this.cards[fourthCardIterator].suit === this.cards[fifthCardIterator].suit) &&
                (this.cards[firstCardIterator].rank === ACE_ON_POKER_HAND) &&
                (this.cards[secondCardIterator].rank === KING_ON_POKER_HAND) &&
                (this.cards[fourthCardIterator].rank === QUEEN_ON_POKER_HAND) &&
                (this.cards[thirdCardIterator].rank === JACK_ON_POKER_HAND) &&
                (this.cards[fifthCardIterator].rank === TEN_ON_POKER_HAND)) {
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
   * @description Function that classifies the hand depending on the higher hand value
   *
   * @memberof PokerHand
   */
  classify() {
    if (this.hasRoyalFlush()) {
      this.label = 'Royal Flush';
    } else if (this.hasStraightFlush()) {
      this.label = 'Straight Flush';
    } else if (this.hasFourOfaKind()) {
      this.label = 'Four of a Kind';
    } else if (this.hasFullHouse()) {
      this.label = 'Full House';
    } else if (this.hasFlush()) {
      this.label = 'Flush';
    } else if (this.hasStraight()) {
      this.label = 'Straight';
    } else if (this.hasThreeOfaKind()) {
      this.label = 'Three of a Kind';
    } else if (this.hasTwoPairs()) {
      this.label = 'Two Pairs';
    } else if (this.hasPair()) {
      this.label = 'Pair';
    } else {
      this.label = '';
    }
  }

  /**
   * @description Function that calculates the probabilities of having each hand value
   *
   * @static
   * @returns {array} Returns an array of objects with the statistic data
   * @memberof PokerHand
   */
  static statistics(numOfHands, numOfCardsByHand, numOfPlays) {
    let statisticResults = [
      {
        "handValue": 'Royal Flush',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Straight Flush',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Four of a Kind',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Full House',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Flush',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Straight',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Three of a Kind',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Two Pair',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Pair',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
      {
        "handValue": 'Nothing',
        "timesAppeared": 0,
        "appereancePercentage": 0
      },
    ]

    for (let handsIterator = 0; handsIterator < numOfPlays; handsIterator++) {
      let deck = new ClassDeckOnPokerHand();
      let hands = [];
      for (let handsIterator = 0; handsIterator < numOfHands; handsIterator++) {
        hands.push(new PokerHand('', numOfCardsByHand));
      }
      deck.shuffle();
      hands = deck.dealHands(hands, hands[0].maxCards);
      hands.forEach(hand => {
        hand.classify();
        if (hand.label === 'Royal Flush') {
          statisticResults[0].timesAppeared++;
        } else if (hand.label === 'Straight Flush') {
          statisticResults[1].timesAppeared++;
        } else if (hand.label === 'Four of a Kind') {
          statisticResults[2].timesAppeared++;
        } else if (hand.label === 'Full House') {
          statisticResults[3].timesAppeared++;
        } else if (hand.label === 'Flush') {
          statisticResults[4].timesAppeared++;
        } else if (hand.label === 'Straight') {
          statisticResults[5].timesAppeared++;
        } else if (hand.label === 'Three of a Kind') {
          statisticResults[6].timesAppeared++;
        } else if (hand.label === 'Two Pairs') {
          statisticResults[7].timesAppeared++;
        } else if (hand.label === 'Pair') {
          statisticResults[8].timesAppeared++;
        } else {
          statisticResults[9].timesAppeared++;
        }
      });

    }

    statisticResults.forEach(handValue => {
      handValue.appereancePercentage = handValue.timesAppeared / (numOfPlays * numOfHands);
    });

    return statisticResults;
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.PokerHand = PokerHand;
}
