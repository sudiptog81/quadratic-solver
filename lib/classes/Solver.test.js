"use strict";

var _Solver = _interopRequireDefault(require("./Solver"));

var _getVersion = _interopRequireDefault(require("./../methods/getVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Solver Class", () => {
  test("methods callable", () => {
    expect(new _Solver.default().solve()).toStrictEqual([0.5, -3]);
    expect(new _Solver.default(1, 6, 5).completeSquare()).toStrictEqual([-1, -5]);
    expect(new _Solver.default().versionMethod()).toBe((0, _getVersion.default)());
  });
  test("properties accessible", () => {
    expect(new _Solver.default().a).toBe(2);
  });
  test("corner cases", () => {
    expect(new _Solver.default(0, 2, 3).solve()).toStrictEqual([-1.5, "Only One Root"]);
    expect(new _Solver.default(0, 2, 3).completeSquare()).toStrictEqual(["ValueError: Algorithm involves division by Zero", "ValueError: Algorithm involves division by Zero"]);
  });
});