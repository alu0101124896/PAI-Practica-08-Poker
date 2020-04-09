/**
 * @file poker-hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the poker hand class
 */

"use strict";

// ↓↓↓ Uncomment this for running on node.js ↓↓↓

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

import { Deck_ as _Deck } from '../src/deck.js';
const Deck = _Deck;

import { Hand_ as _Hand } from '../src/hand.js';
const Hand = _Hand;

import { PokerHand_ as _PokerHand } from '../src/poker-hand.js';
const PokerHand = _PokerHand;

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

describe('Poker Hand Class', () => {
});
