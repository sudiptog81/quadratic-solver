import QuadSolverCitardauq from "./QuadSolverCitardauq";

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
  test("corner cases", () => {
    expect(QuadSolverCitardauq(0, 2, 3)).toStrictEqual([-1.5, "Only One Root"]);
  });
});