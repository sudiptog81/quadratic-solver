import CompleteSquare from "./CompleteSquare";

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