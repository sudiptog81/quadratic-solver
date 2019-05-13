/* eslint-disable no-unused-vars */

const QuadSolver = (a, b, c) => [
  ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)),
  ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a))
];

module.exports = { QuadSolver };
