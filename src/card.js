/**
 * @file card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a card class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

const SPADES_ON_CARD = 4;
const HEARTS_ON_CARD = 3;
const DIAMONDS_ON_CARD = 2;
const CLUBS_ON_CARD = 1;

const ACE_ON_CARD = 14;
const KING_ON_CARD = 13;
const QUEEN_ON_CARD = 12;
const JACK_ON_CARD = 11;
const TEN_ON_CARD = 10;
const NINE_ON_CARD = 9;
const EIGHT_ON_CARD = 8;
const SEVEN_ON_CARD = 7;
const SIX_ON_CARD = 6;
const FIVE_ON_CARD = 5;
const FOUR_ON_CARD = 4;
const THREE_ON_CARD = 3;
const TWO_ON_CARD = 2;

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
  constructor(suit = CLUBS_ON_CARD, rank = TWO_ON_CARD) {
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
      case ACE_ON_CARD:
        rankString = 'Ace';
        break;
      case KING_ON_CARD:
        rankString = 'King';
        break;
      case QUEEN_ON_CARD:
        rankString = 'Queen';
        break;
      case JACK_ON_CARD:
        rankString = 'Jack';
        break;
      case TEN_ON_CARD:
        rankString = 'Ten';
        break;
      case NINE_ON_CARD:
        rankString = 'Nine';
        break;
      case EIGHT_ON_CARD:
        rankString = 'Eight';
        break;
      case SEVEN_ON_CARD:
        rankString = 'Seven';
        break;
      case SIX_ON_CARD:
        rankString = 'Six';
        break;
      case FIVE_ON_CARD:
        rankString = 'Five';
        break;
      case FOUR_ON_CARD:
        rankString = 'Four';
        break;
      case THREE_ON_CARD:
        rankString = 'Three';
        break;
      case TWO_ON_CARD:
        rankString = 'Two';
        break;

      default:
        rankString = 'Unknown Rank';
        break;
    }
    switch (this.suit) {
      case SPADES_ON_CARD:
        suitString = 'Spades';
        break;
      case HEARTS_ON_CARD:
        suitString = 'Hearts';
        break;
      case DIAMONDS_ON_CARD:
        suitString = 'Diamonds';
        break;
      case CLUBS_ON_CARD:
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

if (typeof exports !== 'undefined') { // Execution in node
  exports.Card = Card;
}
