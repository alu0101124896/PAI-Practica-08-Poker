/**
 * @file ejercicio-p08.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
  @description This program prints a circle, a rectangle, a square an a triangle in two coordinate axes
 */

"use strict";

let expectOnExerciseTest;
let ClassCircleOnExerciseTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnExerciseTest = require('chai').expect;
  ClassCircleOnExerciseTest = require('../src/circle.js').Circle;
} else { // Execution in browser
  expectOnExerciseTest = expect;
  ClassCircleOnExerciseTest = Circle;
}


describe('ClassCircleOnExerciseTest Class', () => {
  describe('Default properties', () => {
    const RADIUS = 100;
    let myCircle;

    beforeEach(() => {
      myCircle = new ClassCircleOnExerciseTest(RADIUS);
    });

    it('ClassCircleOnExerciseTest has a radius', () => {
      expectOnExerciseTest(myCircle).to.have.property('radius');
      expectOnExerciseTest(myCircle.radius).to.be.a('number');
      expectOnExerciseTest(myCircle.radius).to.be.equal(RADIUS);
    });
  });

  describe('ClassCircleOnExerciseTest methods', () => {
    const RADIUS = 100;
    const X_COORDINATE = 100;
    const Y_COORDINATE = 100;
    const MY_CIRCLE = new ClassCircleOnExerciseTest(RADIUS);

    it('Draw Circle', () => {
      expectOnExerciseTest(MY_CIRCLE.draw()).to.be.equal(true);
    });
  });
});
