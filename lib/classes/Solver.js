"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _package = require("../../package.json");

class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.version = _package.version;
  }

  versionMethod() {
    return this.version;
  }

}

exports.default = Solver;