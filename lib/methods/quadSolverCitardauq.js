"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Solve a given quadratic equation by the Citardauq Method
 * @param {number} a coefficient of the quadratic term
 * @param {number} b coefficient of the linear term
 * @param {number} c constant term
 * @returns {number[] | string[] | [number, string]} solutions
 * @author sudipto
 */
const quadSolverCitardauq = (a, b, c) => {
  if (a === 0 || b ** 2 - 4 * a * c == 0) {
    return [2 * c / (-1 * b - Math.sqrt(b ** 2 - 4 * a * c)), "Only One Root"];
  } else if (b ** 2 - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else {
    return [2 * c / (-1 * b - Math.sqrt(b ** 2 - 4 * a * c)), 2 * c / (-1 * b + Math.sqrt(b ** 2 - 4 * a * c))];
  } // TODO: Add support for returning complex roots

};

var _default = quadSolverCitardauq;
exports.default = _default;