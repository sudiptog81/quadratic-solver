"use strict";

var _completeSquare = _interopRequireDefault(require("./completeSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Completing the Square", () => {
  test("real solutions 1", () => {
    expect((0, _completeSquare.default)(1, 6, 5)).toStrictEqual([-1, -5]);
  });
  test("real solutions 2", () => {
    expect((0, _completeSquare.default)(1, -8, 5)).toStrictEqual([7.3166247903554, 0.6833752096446002]);
  });
  test("no real solution", () => {
    expect((0, _completeSquare.default)(5, 20, 32)).toStrictEqual([NaN, NaN]);
  });
  test("corner cases", () => {
    expect((0, _completeSquare.default)(0, 2, 3)).toStrictEqual(["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"]);
  });
});