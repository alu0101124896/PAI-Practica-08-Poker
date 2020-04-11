/**
 * @file poker-game.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program gives seven cards to seven poker hands and seachs for straights on them. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

const BLACK = 'black';
const FONT = "30px Arial";

/**
 * @description Function that prints the hand with a straight
 *
 * @param {PokerHand} hand - Poker hand that contains a straight
 * @param {number} handsWithStraights - Number of current hands with a straight for printing displacement
 * @param {*} CONTEXT - Canvas context
 */
function printHand(hand, handsWithStraights, CONTEXT) {
  CONTEXT.fillStyle = BLACK;
  CONTEXT.font = FONT;
  CONTEXT.fillText("The next hand has a straight:", 10, (handsWithStraights * 100) + 30);
  CONTEXT.fillText(hand.toString(), 10, (handsWithStraights * 100) + 70);
}

/**
 * @description Function that prints the the message that no straights have been found
 *
 * @param {*} CONTEXT - Canvas context
 */
function printNoStraights(CONTEXT) {
  CONTEXT.fillStyle = BLACK;
  CONTEXT.font = FONT;
  CONTEXT.fillText("No hand contains a straight.", 10, 30);
}

/**
 * @description Function that searchs for straights on the given hands
 *
 * @param {array} hands - Array of poker hands to search for straights
 * @param {*} CONTEXT - Canvas context
 */
function searchForStraights(hands, CONTEXT) {
  let handsWithStraights = 0;

  hands.forEach(hand => {
    if (hand.hasStraight()) {
      printHand(hand, handsWithStraights, CONTEXT);
      handsWithStraights++;
    }
  });

  if (handsWithStraights === 0) {
    printNoStraights(CONTEXT);
  }
}

/**
 * @description Function that gives seven cards to seven poker hands
 *
 * @param {*} CONTEXT - Canvas context
 */
function sevenCardsSevenHands(CONTEXT) {
  const NUM_OF_HANDS = 7;
  const NUM_OF_CARDS_BY_HAND = 7;
  let deck = new Deck();
  let hands = [];

  for (let handsIterator = 0; handsIterator < NUM_OF_HANDS; handsIterator++) {
    hands.push(new PokerHand('', NUM_OF_CARDS_BY_HAND))
  }

  deck.shuffle();
  hands = deck.dealHands(hands, NUM_OF_CARDS_BY_HAND);

  searchForStraights(hands, CONTEXT);
}

/**
 * @description Function that starts the execution of the progran
 */
function main() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerWidth - 100;
    CANVAS.height = window.innerHeight - 175;

    sevenCardsSevenHands(CONTEXT);
  }
}
