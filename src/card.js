/**
 * @file card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a card class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

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
  constructor(suit = 'C', rank = '2') {
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
      case 'S':
        suitString = 'Spades';
        break;
      case 'H':
        suitString = 'Hearts';
        break;
      case 'D':
        suitString = 'Diamonds';
        break;
      case 'C':
        suitString = 'Clubs';
        break;

      default:
        suitString = 'Unknown Suit';
        break;
    }
    return rankString + ' of ' + suitString;
  }
}

export const CardTest = Card;
