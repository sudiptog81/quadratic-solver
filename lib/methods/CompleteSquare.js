"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const CompleteSquare = (a, b, c) => {
  b = b / a;
  c = c / a;
  return [Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2, -1 * Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2]; // TODO: Add support for returning complex roots instead of NaN
};

var _default = CompleteSquare;
exports.default = _default;