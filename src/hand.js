/**
 * @file hand.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a hand class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

import { Card_ as _Card } from './card.js';
const Card = _Card;

import { Deck_ as _Deck } from './deck.js';
const Deck = _Deck;

// const SUITS = ['C', 'D', 'H', 'S'];
// const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

/**
 * @description Class representing a Hand of cards
 *
 * @class Hand
 */
class Hand {

  /**
   * @description Constructor that creates an instance of a hand.
   *
   * @memberof Hand
   */
  constructor(label = '') {
    this.label = label;
    this.cards = [];
  }

  /**
   * @description Function that turns the hand cards to a human readable string
   *
   * @returns {string} Returns a string with all the cards of the hand
   * @memberof Hand
   */
  toString() {
    let handString = '';
    this.cards.forEach(card => {
      handString += card.toString();
      handString += '\n'
    });
    return handString;
  }

  /**
   * @description Function that adds a given card at the end of the hand
   *
   * @param {Card} newCard - Card to be added to the end of the hand
   * @memberof Hand
   */
  addCard(newCard) {
    this.cards.push(newCard);
  }
}

export const Hand_ = Hand;
