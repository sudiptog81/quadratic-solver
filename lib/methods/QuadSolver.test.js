"use strict";

var _QuadSolver = _interopRequireDefault(require("./QuadSolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Standard Quadratic Equation", () => {
  test("both real roots", () => {
    expect((0, _QuadSolver.default)(2, 5, -3)).toStrictEqual([0.5, -3]);
  });
  test("single real root", () => {
    expect((0, _QuadSolver.default)(1, 4, 4)).toStrictEqual([-2, "Only One Root"]);
  });
  test("no real root", () => {
    expect((0, _QuadSolver.default)(2, 1, 2)).toStrictEqual(["No Real Roots", "No Real Roots"]);
  });
});