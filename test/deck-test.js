/**
 * @file deck-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the deck class
 */

"use strict";

import { expect as _expect } from 'chai';
const expect = _expect;

import { DeckTest as _DeckTest } from '../src/deck.js';
const DeckTest = _DeckTest;

describe('Deck Class', () => {
  describe('Default properties', () => {
    let myDeck;

    beforeEach(() => {
      myDeck = new DeckTest();
    });

    it('Deck has an array of cards', () => {
      expect(myDeck).to.have.property('cards');
      expect(myDeck.cards).to.be.an('array');
    });
  });
});
