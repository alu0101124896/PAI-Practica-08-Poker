/**
 * @file hand-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the hand class
 */

"use strict";

import { expect as _expect } from 'chai';
const expect = _expect;

import { Card_ as _Card } from '../src/card.js';
const Card = _Card;

import { Deck_ as _Deck } from '../src/deck.js';
const Deck = _Deck;

import { Hand_ as _Hand } from '../src/hand.js';
const Hand = _Hand;

describe('Hand Class', () => {
  describe('Default properties', () => {
    let myHand;

    beforeEach(() => {
      myHand = new Hand('new hand');
    });

    it('Deck has a label', () => {
      expect(myHand).to.have.property('label');
      expect(myHand.label).to.be.a('string');
    });
  });
});
