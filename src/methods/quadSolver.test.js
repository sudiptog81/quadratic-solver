import QuadSolver from "./quadSolver";

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
  test("corner cases", () => {
    expect(QuadSolver(0, 2, 3)).toStrictEqual([-1.5, "Only One Root"]);
  });
});