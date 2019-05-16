"use strict";

var _GetVersion = _interopRequireDefault(require("./GetVersion"));

var _package = require("../../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Version Output", () => {
  test("matches package.json version", () => {
    expect((0, _GetVersion.default)()).toBe(`quadratic-solver v${_package.version}`);
  });
});