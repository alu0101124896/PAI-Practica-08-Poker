/**
 * @file hand.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a hand class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

let ClassCardOnHand;
if (typeof require !== 'undefined') { // Execution in node
  ClassCardOnHand = require('./card.js').Card;
} else { // Execution in browser
  ClassCardOnHand = Card;
}

/**
 * @description Class representing a hand of cards
 *
 * @class Hand
 */
class Hand {

  /**
   * @description Constructor that creates an instance of a hand.
   *
   * @memberof Hand
   */
  constructor(label = '', maxCards = 5) {
    this.label = label;
    this.maxCards = maxCards;
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
      handString += ', '
    });
    return handString;
  }

  /**
   * @description Function that adds a given card at the end of the hand
   *
   * @param {ClassCardOnHand} newCard - Card to be added to the end of the hand
   * @returns {boolean} Returns true if success and false if failed
   * @memberof Hand
   */
  addCard(newCard) {
    if (newCard instanceof ClassCardOnHand) {
      if (this.cards.length < this.maxCards) {
        this.cards.push(newCard);
        return true;
      } else {
        console.error('Error: El número de cartas en la mano ha superado el máximo.');
        return false;
      }
    } else {
      console.error('Error: No se puede añadir un elemento distinto a una carta');
      return false;
    }
  }

  /**
   * @description Function that removes the first card from the hand and returns it
   *
   * @returns {ClassCardOnHand} Returns the first card of the hand
   * @memberof Deck
   */
  popCard() {
    if (this.cards.length > 0) {
      return this.cards.shift();
    } else {
      console.error('Error: No se pueden extraer cartas de un mazo vacio.');
      return false;
    }
  }

  /**
   * @description Function that removes a given card from the hand and returns it
   *
   * @param {ClassCardOnHand} cardToPop - Card to be removed from the hand
   * @returns {ClassCardOnHand} Returns the removed card from the hand
   * @memberof Hand
   */
  removeCard(cardToPop) {
    const INDEX_OF_CARD = this.cards.indexOf(cardToPop)
    if (INDEX_OF_CARD !== -1) {
      const POPPED_CARD = this.cards[INDEX_OF_CARD];
      this.cards.splice(INDEX_OF_CARD, 1);
      return POPPED_CARD;
    } else {
      console.error('Error: No se puede extraer una carta que no pertenece a la mano.');
      return false;
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
  static moveCards(sourceSet, numOfCards, destinySet) {
    for (let cardsIterator = 0; cardsIterator < numOfCards; cardsIterator++) {
      if (destinySet.cards.length < destinySet.maxCards) {
        if (sourceSet.cards.length > 0) {
          destinySet.addCard(sourceSet.popCard());
        } else {
          console.error('Error: No quedan cartas disponibles en el/la mazo/mano de origen.')
        }
      } else {
        console.error('Error: Número maximo de cartas alcanzado en el/la mazo/mano de destino.')
      }
    }
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Hand = Hand;
}
