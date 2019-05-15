"use strict";

var _quadraticSolver = require("quadratic-solver");

var _package = require("../package.json");

/* eslint-disable no-unused-vars */
describe("Standard Quadratic Equation", () => {
  test("both real roots", () => {
    expect((0, _quadraticSolver.QuadSolver)(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect((0, _quadraticSolver.QuadSolver)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect((0, _quadraticSolver.QuadSolver)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
});
describe("Citardauq Quadratic Equation", () => {
  test("both real roots", () => {
    expect((0, _quadraticSolver.QuadSolverCitardauq)(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect((0, _quadraticSolver.QuadSolverCitardauq)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect((0, _quadraticSolver.QuadSolverCitardauq)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
});
describe("Completing the Square", () => {
  test("real solutions 1", () => {
    expect((0, _quadraticSolver.CompleteSquare)(1, 6, 5)).toStrictEqual([-1, -5]);
  });
  test("real solutions 2", () => {
    expect((0, _quadraticSolver.CompleteSquare)(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
  });
  test("no real solution", () => {
    expect((0, _quadraticSolver.CompleteSquare)(5, 20, 32)).toStrictEqual([NaN, NaN]);
  });
});
describe("Version Output", () => {
  test("matches package.json version", () => {
    expect((0, _quadraticSolver.GetVersion)()).toBe(`quadratic-solver v${_package.version}`);
  });
});
describe("Solver Class", () => {
  const solver = new _quadraticSolver.Solver();
  test("methods callable", () => {
    expect(solver.versionMethod()).toBe(_package.version);
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});