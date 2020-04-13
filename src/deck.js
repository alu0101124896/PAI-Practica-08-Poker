/**
 * @file deck.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a deck class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

let ClassCardOnDeck;
let ClassHandOnDeck;
if (typeof require !== 'undefined') { // Execution in node
  ClassCardOnDeck = require('./card.js').Card;
  ClassHandOnDeck = require('./hand.js').Hand;
} else { // Execution in browser
  ClassCardOnDeck = Card;
  ClassHandOnDeck = Hand;
}


const SPADES_ON_DECK = 4;
const HEARTS_ON_DECK = 3;
const DIAMONDS_ON_DECK = 2;
const CLUBS_ON_DECK = 1;

const ACE_ON_DECK = 14;
const KING_ON_DECK = 13;
const QUEEN_ON_DECK = 12;
const JACK_ON_DECK = 11;
const TEN_ON_DECK = 10;
const NINE_ON_DECK = 9;
const EIGHT_ON_DECK = 8;
const SEVEN_ON_DECK = 7;
const SIX_ON_DECK = 6;
const FIVE_ON_DECK = 5;
const FOUR_ON_DECK = 4;
const THREE_ON_DECK = 3;
const TWO_ON_DECK = 2;

const SUITS_ON_DECK = [CLUBS_ON_DECK, DIAMONDS_ON_DECK, HEARTS_ON_DECK, SPADES_ON_DECK];
const RANKS_ON_DECK = [TWO_ON_DECK, THREE_ON_DECK, FOUR_ON_DECK, FIVE_ON_DECK, SIX_ON_DECK, SEVEN_ON_DECK, EIGHT_ON_DECK, NINE_ON_DECK, TEN_ON_DECK, JACK_ON_DECK, QUEEN_ON_DECK, KING_ON_DECK, ACE_ON_DECK];

/**
 * @description Class representing a deck of cards
 *
 * @class Deck
 */
class Deck extends ClassHandOnDeck {

  /**
   * @description Constructor that creates an instance of a deck.
   *
   * @memberof Deck
   */
  constructor(label = '') {
    super(label, SUITS_ON_DECK.length * RANKS_ON_DECK.length);
    SUITS_ON_DECK.forEach(suit => {
      RANKS_ON_DECK.forEach(rank => {
        this.cards.push(new ClassCardOnDeck(suit, rank));
      });
    });
  }

  /**
   * @description Function that shuffles de deck of cards
   *
   * @memberof Deck
   */
  shuffle() {
    for (let firstIterator = this.cards.length - 1; firstIterator > 0; firstIterator--) {
      const SECOND_ITERATOR = Math.floor(Math.random() * (firstIterator + 1));
      this.swap(firstIterator, SECOND_ITERATOR);
    }
  }

  /**
   * @description Function that swaps two cards of the deck
   *
   * @param {number} firstIndex - Index of the first card
   * @param {number} secondIndex - Index of the second card
   * @memberof Deck
   */
  swap(firstIndex, secondIndex) {
    const TEMP_CARD = this.cards[firstIndex];
    this.cards[firstIndex] = this.cards[secondIndex];
    this.cards[secondIndex] = TEMP_CARD;
  }

  /**
   * @description Function that calls the quicksort function with the first and last indexes of the deck
   *
   * @memberof Deck
   */
  sort() {
    const LOW_INDEX = 0;
    const HIGH_INDEX = this.cards.length - 1;
    this.quicksort(LOW_INDEX, HIGH_INDEX);
  }

  /**
   * @description Recursive function that sorts the deck following the quicksort algoritm
   *
   * @param {number} lowIndex - Index of the lowest card
   * @param {number} highIndex - Index of the highest card
   * @memberof Deck
   */
  quicksort(lowIndex, highIndex) {
    if (lowIndex < highIndex) {
      const MIDDLE_INDEX = this.split(lowIndex, highIndex);
      this.quicksort(lowIndex, MIDDLE_INDEX - 1);
      this.quicksort(MIDDLE_INDEX + 1, highIndex);
    }
  }

  /**
   * @description Function that splits the deck in two parts
   *
   * @param {number} lowIndex - Index of the lowest card
   * @param {number} highIndex - Index of the highest card
   * @returns {number} Returns the index of the pivot card
   * @memberof Deck
   */
  split(lowIndex, highIndex) {
    const PIVOT_CARD = this.cards[highIndex];
    let firstIterator = lowIndex;
    for (let secondIterator = lowIndex; secondIterator < highIndex; secondIterator++) {
      const HIGHEST_CARD = ClassCardOnDeck.compare(PIVOT_CARD, this.cards[secondIterator]);
      if (HIGHEST_CARD === PIVOT_CARD) {
        this.swap(firstIterator, secondIterator);
        firstIterator++;
      }
    }
    this.swap(firstIterator, highIndex);
    return firstIterator;
  }

  /**
   * @description Function that generates a given number of hands with a given number of cards each one
   *
   * @param {array} hands - Array of hands to give cads
   * @param {number} numOfCardsByHand Number of cards to add to each hand
   * @returns {array} Returns an array with the generated hands
   * @memberof Deck
   */
  dealHands(hands, numOfCardsByHand) {
    for (let cardsIterator = 0; cardsIterator < numOfCardsByHand; cardsIterator++) {
      hands.forEach(hand => {
        hand.addCard(this.popCard());
      });
    }
    return hands;
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Deck = Deck;
}
