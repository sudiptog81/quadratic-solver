"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Complete the Square for a quadratic equation
 * @param {number} a coefficient of the quadratic term
 * @param {number} b coefficient of the linear term
 * @param {number} c constant term
 * @returns {number[] | string[]} solutions
 * @author sudipto
 */
const completeSquare = (a, b, c) => {
  if (a === 0) {
    return ["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"];
  } else {
    b = b / a;
    c = c / a;
    return [Math.sqrt((b / 2) ** 2 - c) - b / 2, -1 * Math.sqrt((b / 2) ** 2 - c) - b / 2];
  } // TODO: Add support for returning complex roots instead of NaN

};

var _default = completeSquare;
exports.default = _default;