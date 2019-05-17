"use strict";

var _getVersion = _interopRequireDefault(require("./getVersion"));

var _package = require("../../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Version Output", () => {
  test("matches package.json version", () => {
    expect((0, _getVersion.default)()).toBe(`quadratic-solver v${_package.version}`);
  });
});