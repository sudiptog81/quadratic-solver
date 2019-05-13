/* eslint-disable no-unused-vars */

const { QuadSolver, QuadSolverCitardauq } = require("./main");

test("Standard Quadratic Equation", () => {
  expect(QuadSolver(2, 5, -3)).toStrictEqual([0.5, -3]);
});

test("Citardauq Quadratic Equation", () => {
  expect(QuadSolverCitardauq(2, 5, -3)).toStrictEqual([0.5, -3]);
});