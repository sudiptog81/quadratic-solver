import completeSquare from "./completeSquare";

describe("Completing the Square", () => {
  test("real solutions 1", () => {
    expect(completeSquare(1, 6, 5)).toStrictEqual([-1, -5]);
  });
  test("real solutions 2", () => {
    expect(completeSquare(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
  });
  test("no real solution", () => {
    expect(completeSquare(5, 20, 32)).toStrictEqual([NaN, NaN]);
  });
  test("corner cases", () => {
    expect(completeSquare(0, 2, 3)).toStrictEqual([
      "ValueError: Algorithm involves division by Zero",
      "ValueError: Algorithm involves division by Zero"
    ]);
  });
});