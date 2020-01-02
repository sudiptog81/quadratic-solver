"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quadSolverCitardauq = _interopRequireDefault(require("./quadSolverCitardauq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Solve a given quadratic equation
 * @param {number} a coefficient of the quadratic term
 * @param {number} b coefficient of the linear term
 * @param {number} c constant term
 * @returns {number[] | string[] | [number, string]} solutions
 * @author sudipto
 */
const quadSolver = (a, b, c) => {
  if (a === 0) {
    return (0, _quadSolverCitardauq.default)(a, b, c);
  } else if (b ** 2 - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else if (b ** 2 - 4 * a * c == 0) {
    return [(-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a), "Only One Root"];
  } else {
    return [(-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a), (-1 * b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)];
  } // TODO: Add support for returning complex roots

};

var _default = quadSolver;
exports.default = _default;