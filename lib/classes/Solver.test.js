"use strict";

var _Solver = _interopRequireDefault(require("./Solver"));

var _GetVersion = _interopRequireDefault(require("./../methods/GetVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Solver Class", () => {
  const solver = new _Solver.default();
  test("methods callable", () => {
    expect(solver.solve()).toStrictEqual([0.5, -3]);
    expect(new _Solver.default(1, 6, 5).completeSquare()).toStrictEqual([-1, -5]);
    expect(solver.versionMethod()).toBe((0, _GetVersion.default)());
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});