import Solver from "./Solver";
import { version } from "../../package.json";

describe("Solver Class", () => {
  const solver = new Solver();
  test("methods callable", () => {
    expect(solver.versionMethod()).toBe(version);
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});