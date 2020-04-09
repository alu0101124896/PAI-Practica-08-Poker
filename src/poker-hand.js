/**
 * @file poker-hand.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a poker hand class for the Poker game. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { Card_ as _Card } from './card.js';
const Card = _Card;

import { Hand_ as _Hand } from './hand.js';
const Hand = _Hand;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑

/**
 * @description Class representing a poker hand of 7 cards
 *
 * @class PokerHand
 */
class PokerHand extends Hand{

  /**
   * @description Constructor that creates an instance of a poker hand.
   *
   * @memberof PokerHand
   */
  constructor(label = '') {
    super(label);
  }
}

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

export const PokerHand_ = PokerHand;

// ↑↑↑ Uncomment this for running on node.js ↑↑↑
