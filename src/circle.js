/**
 * @file circle.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a circle class for the exercice made in the pe session.
 */

"use strict";


class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  /**
   * @description Function that draws the circle at given coordinates
   *
   * @param {*} xCoordinate - X coordinate
   * @param {*} yCoordinate - Y coordinate
   * @param {*} CONTEXT
   * @param {*} CANVAS
   * @memberof Circle
   */
  draw(xCoordinate, yCoordinate, CONTEXT, CANVAS) {
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = BLACK;
    CONTEXT.lineWidth = FIGURES_LINE_WIDTH;
    CONTEXT.ellipse(CANVAS.width / 4, -CANVAS.height / 4, (CANVAS.width / 4) * 0.6, (CANVAS.height / 4) * 0.6, 0, 0, 2 * Math.PI);
    CONTEXT.stroke();
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Circle = Circle;
}
