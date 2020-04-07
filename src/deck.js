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

const SUITS = ['S','H', 'D', 'C'];
const RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

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
      RANKS.forEach(rank => {
        this.cards.push(new Card(suit, rank));
      });
    });
  }
}

export const DeckTest = Deck;
