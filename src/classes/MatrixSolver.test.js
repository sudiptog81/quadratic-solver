import MatrixSolver from "./MatrixSolver";
import getVersion from "./../methods/getVersion";

describe("MatrixSolver Class", () => {
  test("methods callable", () => {
    expect(new MatrixSolver().solveAll()).toStrictEqual([[0.5, -3]]);
    expect(new MatrixSolver([[1, 6, 5]]).completeSquareAll()).toStrictEqual([[-1, -5]]);
    expect(new MatrixSolver().versionMethod()).toBe(getVersion());
  });
  test("properties accessible", () => {
    expect(new MatrixSolver().matrix).toStrictEqual([[2, 5, -3]]);
  });
  test("corner cases", () => {
    expect(new MatrixSolver([[0, 2, 3]]).solveAll()).toStrictEqual([[-1.5, "Only One Root"]]);
    expect(new MatrixSolver([[0, 2, 3]]).completeSquareAll()).toStrictEqual([["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"]]);
  });
});