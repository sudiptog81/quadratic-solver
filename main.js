/* eslint-disable no-unused-vars */

const QuadSolver = (a, b, c) => [
  ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)),
  ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a))
];

const QuadSolverCitardauq = (a, b, c) => [
  ((2 * c) / (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))),
  ((2 * c) / (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))))
];

module.exports = { QuadSolver, QuadSolverCitardauq };
