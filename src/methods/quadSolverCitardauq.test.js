import quadSolverCitardauq from "./quadSolverCitardauq";

describe("Citardauq Quadratic Equation", () => {
  test("both real roots", () => {
    expect(quadSolverCitardauq(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect(quadSolverCitardauq(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect(quadSolverCitardauq(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
  test("corner cases", () => {
    expect(quadSolverCitardauq(0, 2, 3)).toStrictEqual([-1.5, "Only One Root"]);
  });
});