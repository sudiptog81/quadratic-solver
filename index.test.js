/* eslint-disable no-unused-vars */

import { QuadSolver, QuadSolverCitardauq, CompleteSquare, GetVersion } from "quadratic-solver";

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

test("Completing the Square", () => {
  expect(CompleteSquare(1, 6, 5)).toStrictEqual([-1, -5]);
  expect(CompleteSquare(5, 20, 32)).toStrictEqual([NaN, NaN]);
  expect(CompleteSquare(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
});

test("Version Output", () => {
  expect(GetVersion()).toBe(`quadratic-solver v${require("./package.json").version}`);
});