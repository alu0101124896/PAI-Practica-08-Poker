/**
 * @file deck.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a deck class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

import { Card_ as _Card, CardTest } from '../src/card.js';
const Card = _Card;

const SUITS = ['C', 'D', 'H', 'S'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

/**
 * @description Class representing a deck of cards
 *
 * @class Deck
 */
class Deck {

  /**
   * @description Constructor that creates an instance of a deck.
   *
   * @memberof Deck
   */
  constructor() {
    this.cards = [];
    SUITS.forEach(suit => {
      let asdf = [];
      RANKS.forEach(rank => {
        asdf.push(new Card(suit, rank));
      });
      this.cards.push(asdf);
    });
  }

  toString() {
    let deckString = '';
    this.cards.forEach(suit => {
      suit.forEach(card => {
        deckString += card.toString();
        deckString += '\n'
      });
    });
    return deckString;
  }
}

export const DeckTest = Deck;
