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

  /**
   * @description Function that removes a given card from the hand and returns it
   *
   * @param {Card} cardToPop - Card to be removed from the hand
   * @returns {Card} Returns the removed card from the hand
   * @memberof Hand
   */
  popCard(cardToPop) {
    const INDEX_OF_CARD = this.cards.indexOf(cardToPop)
    if(INDEX_OF_CARD !== -1) {
      const POPPED_CARD = this.cards[INDEX_OF_CARD];
      this.cards.splice(INDEX_OF_CARD, 1);
      return POPPED_CARD;
    }
  }

  /**
   * @description Function that moves the given number of cards from the given source set to the given destiny set
   *
   * @static
   * @param {*} sourceSet - Source deck/hand of cards
   * @param {number} numOfCards - Number of cards to be moved
   * @param {*} destinySet - Destiny deck/hand of cards
   * @memberof Hand
   */
  static moveCards (sourceSet, numOfCards, destinySet) {
    for (let cardsIterator = 0; cardsIterator < numOfCards; cardsIterator++) {
      destinySet.addCard(sourceSet.popCard());
    }
  }
}

export const Hand_ = Hand;
