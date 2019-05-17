"use strict";

var _MatrixSolver = _interopRequireDefault(require("./MatrixSolver"));

var _getVersion = _interopRequireDefault(require("./../methods/getVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("MatrixSolver Class", () => {
  test("methods callable", () => {
    expect(new _MatrixSolver.default().solveAll()).toStrictEqual([[0.5, -3]]);
    expect(new _MatrixSolver.default([[1, 6, 5]]).completeSquareAll()).toStrictEqual([[-1, -5]]);
    expect(new _MatrixSolver.default().versionMethod()).toBe((0, _getVersion.default)());
  });
  test("properties accessible", () => {
    expect(new _MatrixSolver.default().matrix).toStrictEqual([[2, 5, -3]]);
  });
  test("corner cases", () => {
    expect(new _MatrixSolver.default([[0, 2, 3]]).solveAll()).toStrictEqual([[-1.5, "Only One Root"]]);
    expect(new _MatrixSolver.default([[0, 2, 3]]).completeSquareAll()).toStrictEqual([["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"]]);
  });
});