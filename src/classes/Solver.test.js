import Solver from "./Solver";
import GetVersion from "./../methods/GetVersion";

describe("Solver Class", () => {
  test("methods callable", () => {
    expect(new Solver().solve()).toStrictEqual([0.5, -3]);
    expect(new Solver(1, 6, 5).completeSquare()).toStrictEqual([-1, -5]);
    expect(new Solver().versionMethod()).toBe(GetVersion());
  });
  test("properties accessible", () => {
    expect(new Solver().a).toBe(2);
  });
  test("corner cases", () => {
    expect(new Solver(0, 2, 3).solve()).toStrictEqual([-1.5, "Only One Root"]);
    expect(new Solver(0, 2, 3).completeSquare()).toStrictEqual(["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"]);
  });
});