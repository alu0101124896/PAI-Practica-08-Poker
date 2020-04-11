/**
 * @file poker-statistics.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
  @description This program calculates the probability for each hand value. More info about it here: https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

const LINE_WIDTH = 3;
const BLACK = 'black';
const FONT = "30px Arial";

/**
 * @description Function that draws the lines of the table
 *
 * @param {number} numOfRows - Number of rows of the table
 * @param {number} rowHeight - Pixels row height
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawLines(numOfRows, rowHeight, CONTEXT, CANVAS) {
  CONTEXT.beginPath();
  CONTEXT.moveTo(CANVAS.width / 3, 0);
  CONTEXT.lineTo(CANVAS.width / 3, CANVAS.height);
  CONTEXT.lineWidth = LINE_WIDTH;
  CONTEXT.strokeStyle = BLACK;
  CONTEXT.stroke();

  CONTEXT.beginPath();
  CONTEXT.moveTo(CANVAS.width * 2 / 3, 0);
  CONTEXT.lineTo(CANVAS.width * 2 / 3, CANVAS.height);
  CONTEXT.lineWidth = LINE_WIDTH;
  CONTEXT.strokeStyle = BLACK;
  CONTEXT.stroke();

  for (let rowIterator = 1; rowIterator < numOfRows; rowIterator++) {
    CONTEXT.beginPath();
    CONTEXT.moveTo(0, rowHeight * rowIterator);
    CONTEXT.lineTo(CANVAS.width, rowHeight * rowIterator);
    CONTEXT.lineWidth = LINE_WIDTH;
    CONTEXT.strokeStyle = BLACK;
    CONTEXT.stroke();
  }
}

/**
 * @description Function that prints the statistics table
 *
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function printStatistics(CONTEXT, CANVAS) {
  const NUM_OF_HANDS = 7;
  const NUM_OF_CARDS_BY_HAND = 7;
  const NUM_OF_PLAYS = 1000;

  let statistics = PokerHand.statistics(NUM_OF_HANDS, NUM_OF_CARDS_BY_HAND, NUM_OF_PLAYS);
  console.log(statistics);

  const NUM_OF_ROWS = statistics.length;

  let rowHeight = CANVAS.height / NUM_OF_ROWS;
  drawLines(NUM_OF_ROWS, rowHeight, CONTEXT, CANVAS);

  for (let rowIterator = 0; rowIterator < NUM_OF_ROWS; rowIterator++) {
    CONTEXT.fillStyle = BLACK;
    CONTEXT.font = FONT;
    CONTEXT.fillText(statistics[rowIterator].handValue, 10, (rowHeight * rowIterator) + 40);
    CONTEXT.fillText(statistics[rowIterator].timesAppeared, CANVAS.width / 3 + 10, (rowHeight * rowIterator) + 40);
    CONTEXT.fillText(statistics[rowIterator].appereancePercentage, CANVAS.width * 2 / 3 + 10, (rowHeight * rowIterator) + 40);
  }
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

    printStatistics(CONTEXT, CANVAS);
  }
}
