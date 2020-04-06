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
const JACK = 'J';
const QUEEN = 'Q';
const KING = 'K';

/**
 * @description Class representing a complex number
 *
 * @class Card
 */
class Card {

  /**
   * @description Constructor that creates an instance of a card.
   *
   * @memberof Card
   */
  constructor(suit = CLUBS, rank = '2') {
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
      case 'A':
        rankString = 'Ace';
        break;
      case '2':
        rankString = 'Two';
        break;
      case '3':
        rankString = 'Three';
        break;
      case '4':
        rankString = 'Four';
        break;
      case '5':
        rankString = 'Five';
        break;
      case '6':
        rankString = 'Six';
        break;
      case '7':
        rankString = 'Seven';
        break;
      case '8':
        rankString = 'Eight';
        break;
      case '9':
        rankString = 'Nine';
        break;
      case '10':
        rankString = 'Ten';
        break;
      case 'J':
        rankString = 'Jack';
        break;
      case 'Q':
        rankString = 'Queen';
        break;
      case 'K':
        rankString = 'King';
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

  static compare(cardOne, cardTwo) {
    if (cardOne.suit === SPADES) {
      if (cardTwo.suit === SPADES) {
        return 0;
      } else {
        return 1;
      }
    } else if (cardOne.suit === HEARTS) {
      if (cardTwo.suit === SPADES) {
        return -1;
      } else if (cardTwo.suit === HEARTS) {
        return 0;
      } else {
        return 1;
      }
    } else if (cardOne.suit === DIAMONDS) {
      if ((cardTwo.suit === SPADES) || (cardTwo.suit === HEARTS)) {
        return -1;
      } else if (cardTwo.suit === DIAMONDS) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if ((cardTwo.suit === SPADES) || (cardTwo.suit === HEARTS) || (cardTwo.suit === DIAMONDS)) {
        return -1;
      } else {
        return 0;
      }
    }
  }
}

export const CardTest = Card;
