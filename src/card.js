/**
 * @file card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a card class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

const SPADES = 'S';
const HEARTS = 'H';
const DIAMONDS = 'D';
const CLUBS = 'C';

const ACE = 'A';
const KING = 'K';
const QUEEN = 'Q';
const JACK = 'J';
const TEN = '10';
const NINE = '9';
const EIGHT = '8';
const SEVEN = '7';
const SIX = '6';
const FIVE = '5';
const FOUR = '4';
const THREE = '3';
const TWO = '2';

/**
 * @description Class representing a card
 *
 * @class Card
 */
class Card {

  /**
   * @description Constructor that creates an instance of a card.
   *
   * @memberof Card
   */
  constructor(suit = CLUBS, rank = TWO) {
    this.suit = suit;
    this.rank = rank;
  }

  /**
   * @description Function that generates a human readable string with the rank and suit of the card
   *
   * @returns {string} Returns a string with the suit and rank
   * @memberof Card
   */
  toString() {
    let rankString = '';
    let suitString = '';
    switch (this.rank) {
      case ACE:
        rankString = 'Ace';
        break;
      case KING:
        rankString = 'King';
        break;
      case QUEEN:
        rankString = 'Queen';
        break;
      case JACK:
        rankString = 'Jack';
        break;
      case TEN:
        rankString = 'Ten';
        break;
      case NINE:
        rankString = 'Nine';
        break;
      case EIGHT:
        rankString = 'Eight';
        break;
      case SEVEN:
        rankString = 'Seven';
        break;
      case SIX:
        rankString = 'Six';
        break;
      case FIVE:
        rankString = 'Five';
        break;
      case FOUR:
        rankString = 'Four';
        break;
      case THREE:
        rankString = 'Three';
        break;
      case TWO:
        rankString = 'Two';
        break;

      default:
        rankString = 'Unknown Rank';
        break;
    }
    switch (this.suit) {
      case SPADES:
        suitString = 'Spades';
        break;
      case HEARTS:
        suitString = 'Hearts';
        break;
      case DIAMONDS:
        suitString = 'Diamonds';
        break;
      case CLUBS:
        suitString = 'Clubs';
        break;

      default:
        suitString = 'Unknown Suit';
        break;
    }
    return rankString + ' of ' + suitString;
  }

  /**
   * @description Function that compares two cards to see which one has the higher suit. In case of tie, calls the rankComparator function
   *
   * @static
   * @param {Card} cardOne - First card to compare
   * @param {Card} cardTwo - Second card to compare
   * @returns {Card} Returns the card with the highest value
   * @memberof Card
   */
  static compare(cardOne, cardTwo) {
    if (cardOne.suit === SPADES) {
      if (cardTwo.suit === SPADES) {
        return Card.rankComparator(cardOne, cardTwo);
      } else {
        return cardOne;
      }
    } else if (cardOne.suit === HEARTS) {
      if (cardTwo.suit === SPADES) {
        return cardTwo;
      } else if (cardTwo.suit === HEARTS) {
        return Card.rankComparator(cardOne, cardTwo);
      } else {
        return cardOne;
      }
    } else if (cardOne.suit === DIAMONDS) {
      if ((cardTwo.suit === SPADES) || (cardTwo.suit === HEARTS)) {
        return cardTwo;
      } else if (cardTwo.suit === DIAMONDS) {
        return Card.rankComparator(cardOne, cardTwo);
      } else {
        return cardOne;
      }
    } else {
      if ((cardTwo.suit === SPADES) || (cardTwo.suit === HEARTS) || (cardTwo.suit === DIAMONDS)) {
        return cardTwo;
      } else {
        return Card.rankComparator(cardOne, cardTwo);
      }
    }
  }

  /**
   * @description Function that compares two cards to see which one has the higher rank
   *
   * @static
   * @param {Card} cardOne - First card to compare
   * @param {Card} cardTwo - Second card to compare
   * @returns {Card} Returns the card with the highest rank
   * @memberof Card
   */
  static rankComparator(cardOne, cardTwo) {
    if (cardOne.rank === ACE) {
      return cardOne;
    } else if (cardOne.rank === KING) {
      if (cardTwo.rank === ACE) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === QUEEN) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === JACK) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === TEN) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === NINE) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === EIGHT) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === SEVEN) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE) || (cardTwo.rank === EIGHT)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === SIX) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE) || (cardTwo.rank === EIGHT) || (cardTwo.rank === SEVEN)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === FIVE) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE) || (cardTwo.rank === EIGHT) || (cardTwo.rank === SEVEN) || (cardTwo.rank === SIX)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === FOUR) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE) || (cardTwo.rank === EIGHT) || (cardTwo.rank === SEVEN) || (cardTwo.rank === SIX) || (cardTwo.rank === FIVE)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else if (cardOne.rank === THREE) {
      if ((cardTwo.rank === ACE) || (cardTwo.rank === KING) || (cardTwo.rank === QUEEN) || (cardTwo.rank === JACK) || (cardTwo.rank === TEN) || (cardTwo.rank === NINE) || (cardTwo.rank === EIGHT) || (cardTwo.rank === SEVEN) || (cardTwo.rank === SIX) || (cardTwo.rank === FIVE) || (cardTwo.rank === FOUR)) {
        return cardTwo;
      } else {
        return cardOne;
      }
    } else {
      return cardTwo;
    }
  }
}

export const Card_ = Card;
