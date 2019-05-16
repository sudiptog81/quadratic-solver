import Solver from "./Solver";
import GetVersion from "./../methods/GetVersion";

describe("Solver Class", () => {
  const solver = new Solver();
  test("methods callable", () => {
    expect(solver.solve()).toStrictEqual([0.5, -3]);
    expect(new Solver(1, 6, 5).completeSquare()).toStrictEqual([-1, -5]);
    expect(solver.versionMethod()).toBe(GetVersion());
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});