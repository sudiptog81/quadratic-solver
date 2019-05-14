"use strict";

var _quadraticSolver = require("quadratic-solver");

/* eslint-disable no-unused-vars */
test("Standard Quadratic Equation", function () {
  expect((0, _quadraticSolver.QuadSolver)(2, 5, -3)).toStrictEqual([0.5, -3]);
  expect((0, _quadraticSolver.QuadSolver)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  expect((0, _quadraticSolver.QuadSolver)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
});
test("Citardauq Quadratic Equation", function () {
  expect((0, _quadraticSolver.QuadSolverCitardauq)(2, 5, -3)).toStrictEqual([0.5, -3]);
  expect((0, _quadraticSolver.QuadSolverCitardauq)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  expect((0, _quadraticSolver.QuadSolverCitardauq)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
});
test("Completing the Square", function () {
  expect((0, _quadraticSolver.CompleteSquare)(1, 6, 5)).toStrictEqual([-1, -5]);
  expect((0, _quadraticSolver.CompleteSquare)(5, 20, 32)).toStrictEqual([NaN, NaN]);
  expect((0, _quadraticSolver.CompleteSquare)(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
});
test("Version Output", function () {
  expect((0, _quadraticSolver.GetVersion)()).toBe("quadratic-solver v".concat(require("./package.json").version));
});