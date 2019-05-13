/* eslint-disable no-unused-vars */

const { QuadSolver, QuadSolverCitardauq } = require("quadratic-solver");

test("Standard Quadratic Equation", () => {
  expect(QuadSolver(2, 5, -3)).toStrictEqual([0.5, -3]);
  expect(QuadSolver(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  expect(QuadSolver(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
});

test("Citardauq Quadratic Equation", () => {
  expect(QuadSolverCitardauq(2, 5, -3)).toStrictEqual([0.5, -3]);
  expect(QuadSolverCitardauq(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  expect(QuadSolverCitardauq(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
});