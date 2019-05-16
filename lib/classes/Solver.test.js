"use strict";

var _Solver = _interopRequireDefault(require("./Solver"));

var _package = require("../../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Solver Class", () => {
  const solver = new _Solver.default();
  test("methods callable", () => {
    expect(solver.versionMethod()).toBe(_package.version);
  });
  test("properties accessible", () => {
    expect(solver.a).toBe(2);
  });
});