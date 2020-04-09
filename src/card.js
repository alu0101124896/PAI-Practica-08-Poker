/**
 * @file card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a card class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

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
   * @description Function that compares two cards to see which one has the higher suit. In case of tie, compares the ranks.
   *
   * @static
   * @param {Card} cardOne - First card to compare
   * @param {Card} cardTwo - Second card to compare
   * @returns {Card} Returns the card with the highest value
   * @memberof Card
   */
  static compare(cardOne, cardTwo) {
    if (cardOne.suit > cardTwo.suit) {
      return cardOne;
    } else if (cardOne.suit === cardTwo.suit) {
      if (cardOne.rank >= cardTwo.rank) {
        return cardOne;
      } else {
        return cardTwo;
      }
    } else {
      return cardTwo;
    }
  }
}

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

export const Card_ = Card;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑
