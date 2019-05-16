"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GetVersion = _interopRequireDefault(require("./../methods/GetVersion"));

var _QuadSolver = _interopRequireDefault(require("./../methods/QuadSolver"));

var _CompleteSquare = _interopRequireDefault(require("./../methods/CompleteSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solve() {
    return (0, _QuadSolver.default)(this.a, this.b, this.c);
  }

  completeSquare() {
    return (0, _CompleteSquare.default)(this.a, this.b, this.c);
  }

  versionMethod() {
    return (0, _GetVersion.default)();
  }

}

exports.default = Solver;