/**
 * @file deck.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a deck class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { Card_ as _Card } from './card.js';
const Card = _Card;

import { Hand_ as _Hand } from './hand.js';
const Hand = _Hand;

const SPADES = 4;
const HEARTS = 3;
const DIAMONDS = 2;
const CLUBS = 1;

const ACE = 14;
const KING = 13;
const QUEEN = 12;
const JACK = 11;
const TEN = 10;
const NINE = 9;
const EIGHT = 8;
const SEVEN = 7;
const SIX = 6;
const FIVE = 5;
const FOUR = 4;
const THREE = 3;
const TWO = 2;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

const SUITS = [CLUBS, DIAMONDS, HEARTS, SPADES];
const RANKS = [TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE];

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
    this.maxCards = SUITS.length * RANKS.length;
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
    if (this.cards.length > 0) {
      const FIRST_CARD = this.cards[0];
      this.cards.splice(0, 1);
      return FIRST_CARD;
    } else {
      console.error('Error: No se pueden extraer cartas de un mazo vacio.')
    }
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
      const HIGHEST_CARD = Card.compare(PIVOT_CARD, this.cards[secondIterator]);
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
   * @param {number} numOfHands - Number of hands to generate
   * @param {number} numOfCardsByHand Number of cards to add to each hand
   * @returns {array} Returns an array with the generated hands
   * @memberof Deck
   */
  dealHands(numOfHands, numOfCardsByHand) {
    let hands = [];
    for (let handsIterator = 0; handsIterator < numOfHands; handsIterator++) {
      hands.push(new Hand('Hand ' + (handsIterator + 1)));
    }
    for (let cardsIterator = 0; cardsIterator < numOfCardsByHand; cardsIterator++) {
      for (let handsIterator = 0; handsIterator < numOfHands; handsIterator++) {
        hands[handsIterator].addCard(this.popCard());
      }
    }
    return hands;
  }
}

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

export const Deck_ = Deck;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑
