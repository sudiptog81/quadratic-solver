"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getVersion = _interopRequireDefault(require("./../methods/getVersion"));

var _quadSolver = _interopRequireDefault(require("./../methods/quadSolver"));

var _completeSquare = _interopRequireDefault(require("./../methods/completeSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MatrixSolver {
  constructor(matrix = [[2, 5, -3]]) {
    this.matrix = [...matrix];
  }

  solveAll() {
    return this.matrix.map(el => (0, _quadSolver.default)(el[0], el[1], el[2]));
  }

  completeSquareAll() {
    return this.matrix.map(el => (0, _completeSquare.default)(el[0], el[1], el[2]));
  }

  versionMethod() {
    return (0, _getVersion.default)();
  }

}

exports.default = MatrixSolver;