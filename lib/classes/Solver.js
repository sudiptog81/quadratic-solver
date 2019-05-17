"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getVersion = _interopRequireDefault(require("./../methods/getVersion"));

var _quadSolver = _interopRequireDefault(require("./../methods/quadSolver"));

var _completeSquare = _interopRequireDefault(require("./../methods/completeSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solve() {
    return (0, _quadSolver.default)(this.a, this.b, this.c);
  }

  completeSquare() {
    return (0, _completeSquare.default)(this.a, this.b, this.c);
  }

  versionMethod() {
    return (0, _getVersion.default)();
  }

}

exports.default = Solver;