"use strict";

var _quadSolver = _interopRequireDefault(require("./quadSolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Standard Quadratic Equation", () => {
  test("both real roots", () => {
    expect((0, _quadSolver.default)(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect((0, _quadSolver.default)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect((0, _quadSolver.default)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
  test("corner cases", () => {
    expect((0, _quadSolver.default)(0, 2, 3)).toStrictEqual([-1.5, "Only One Root"]);
  });
});