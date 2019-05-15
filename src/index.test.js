/* eslint-disable no-unused-vars */

import { QuadSolver, QuadSolverCitardauq, CompleteSquare, GetVersion, Solver } from "quadratic-solver";
import { version } from "../package.json";

describe("Standard Quadratic Equation", () => {
  test("both real roots", () => {
    expect(QuadSolver(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect(QuadSolver(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect(QuadSolver(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
});

describe("Citardauq Quadratic Equation", () => {
  test("both real roots", () => {
    expect(QuadSolverCitardauq(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect(QuadSolverCitardauq(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect(QuadSolverCitardauq(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
});

describe("Completing the Square", () => {
  test("real solutions 1", () => {
    expect(CompleteSquare(1, 6, 5)).toStrictEqual([-1, -5]);
  });
  test("real solutions 2", () => {
    expect(CompleteSquare(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
  });
  test("no real solution", () => {
    expect(CompleteSquare(5, 20, 32)).toStrictEqual([NaN, NaN]);
  });
});

describe("Version Output", () => {
  test("matches package.json version", () => {
    expect(GetVersion()).toBe(`quadratic-solver v${version}`);
  });
});

describe("Solver Class", () => {
  const solver = new Solver();
  test("methods callable", () => {
    expect(solver.versionMethod()).toBe(version);
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});