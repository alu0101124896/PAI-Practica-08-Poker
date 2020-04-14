/**
 * @file ejercicio-p08.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
  @description This program prints a circle, a rectangle, a square an a triangle in two coordinate axes
 */

"use strict";

const BLACK = 'black';
const AXES_LINE_WIDTH = 3;

/**
 * @description Function that draws two coordinate axes
 *
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawCoordinateAxes(CONTEXT, CANVAS) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = BLACK;
  CONTEXT.lineWidth = AXES_LINE_WIDTH;
  CONTEXT.moveTo(0, CANVAS.width / 2);
  CONTEXT.lineTo(CANVAS.height, CANVAS.width / 2);
  CONTEXT.stroke();

  CONTEXT.beginPath();
  CONTEXT.strokeStyle = BLACK;
  CONTEXT.lineWidth = AXES_LINE_WIDTH;
  CONTEXT.moveTo(CANVAS.height/2, 0);
  CONTEXT.lineTo(CANVAS.height/2, CANVAS.width);
  CONTEXT.stroke();

  CONTEXT.translate(CANVAS.width / 2, CANVAS.height / 2);

  for (let xAxisIterator = 0; xAxisIterator < CANVAS.width / 2; xAxisIterator += 5) {

  }
}

/**
 * @description Function that starts the execution of the program in browser
 */
function main() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerHeight - 175;
    CANVAS.height = window.innerHeight - 175;

    drawCoordinateAxes(CONTEXT, CANVAS);
  }
}
