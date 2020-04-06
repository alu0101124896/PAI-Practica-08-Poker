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
  constructor(suit = 'Clubs', rank = '2') {
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
      case '1':
      case 'A':
      case 'a':
      case 'Ace':
      case 'ace':
        rankString = 'Ace';
        break;
      case '2':
      case 'Two':
      case 'two':
        rankString = 'Two';
        break;
      case '3':
      case 'Three':
      case 'three':
        rankString = 'Three';
        break;
      case '4':
      case 'Four':
      case 'four':
        rankString = 'Four';
        break;
      case '5':
      case 'Five':
      case 'five':
        rankString = 'Five';
        break;
      case '6':
      case 'Six':
      case 'six':
        rankString = 'Six';
        break;
      case '7':
      case 'Seven':
      case 'seven':
        rankString = 'Seven';
        break;
      case '8':
      case 'Eight':
      case 'eight':
        rankString = 'Eight';
        break;
      case '9':
      case 'Nine':
      case 'nine':
        rankString = 'Nine';
        break;
      case '10':
      case 'Ten':
      case 'ten':
        rankString = 'Ten';
        break;
      case '11':
      case 'J':
      case 'j':
      case 'Jack':
      case 'jack':
        rankString = 'Jack';
        break;
      case '12':
      case 'Q':
      case 'q':
      case 'Queen':
      case 'queen':
        rankString = 'Queen';
        break;
      case '13':
      case 'K':
      case 'k':
      case 'King':
      case 'king':
        rankString = 'King';
        break;

      default:
        rankString = 'Unknown Rank';
        break;
    }
    switch (this.suit) {
      case 'S':
      case 's':
      case 'Spades':
      case 'spades':
        suitString = 'Spades';
        break;
      case 'H':
      case 'h':
      case 'Hearts':
      case 'hearts':
        suitString = 'Hearts';
        break;
      case 'D':
      case 'd':
      case 'Diamonds':
      case 'diamonds':
        suitString = 'Diamonds';
        break;
      case 'C':
      case 'c':
      case 'Clubs':
      case 'clubs':
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
