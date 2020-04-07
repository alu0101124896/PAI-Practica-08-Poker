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
      RANKS.forEach(rank => {
        this.cards.push(new Card(suit, rank));
      });
    });
  }

  /**
   * @description Function that turns the deck cards to a human readable string
   *
   * @returns {string} Returns a string with all the cards of the deck
   * @memberof Deck
   */
  toString() {
    let deckString = '';
    this.cards.forEach(card => {
      deckString += card.toString();
      deckString += '\n'
    });
    return deckString;
  }

  /**
   * @description Function that removes the first card from the deck and returns it
   *
   * @returns {Card} Returns the first card of the deck
   * @memberof Deck
   */
  popCard() {
    let firstCard = this.cards[0];
    this.cards.splice(0, 1);
    return firstCard;
  }

  /**
   * @description Function that adds a given card at the end of the deck
   *
   * @param {Card} newCard - Card to be added to the end of the deck
   * @memberof Deck
   */
  addCard(newCard) {
    this.cards.push(newCard);
  }

  /**
   * @description Function that shuffles de deck of cards
   *
   * @memberof Deck
   */
  shuffle() {
    for (let firstIterator = this.cards.length - 1; firstIterator > 0; firstIterator--) {
      let secondIterator = Math.floor(Math.random() * (firstIterator + 1));
        let tempCard = this.cards[firstIterator];
        this.cards[firstIterator] = this.cards[secondIterator];
        this.cards[secondIterator] = tempCard;
    }
  }
}

export const DeckTest = Deck;
