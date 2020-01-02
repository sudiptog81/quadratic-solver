"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _package = require("../../package.json");

/**
 * Get the version of the package being used
 * @returns {string} version
 * @author sudipto
 */
const getVersion = () => `quadratic-solver v${_package.version}`;

var _default = getVersion;
exports.default = _default;