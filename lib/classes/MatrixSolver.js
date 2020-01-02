"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getVersion = _interopRequireDefault(require("./../methods/getVersion"));

var _quadSolver = _interopRequireDefault(require("./../methods/quadSolver"));

var _completeSquare = _interopRequireDefault(require("./../methods/completeSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a new instance of MatrixSolver
 * @param {number[][]} matrix
 * @author sudipto
 */
class MatrixSolver {
  constructor(matrix = [[2, 5, -3]]) {
    this.matrix = [...matrix];
  }
  /**
   * Solve all equations for the instance
   * @returns {number[][]} solutionMatrix
   * @author sudipto
   */


  solveAll() {
    return this.matrix.map(el => (0, _quadSolver.default)(el[0], el[1], el[2]));
  }
  /**
  * Complete squares for all the equations
  * @returns {number[][]} solutionMatrix
  * @author sudipto
  */


  completeSquareAll() {
    return this.matrix.map(el => (0, _completeSquare.default)(el[0], el[1], el[2]));
  }
  /**
  * Get the version of the MatrixSolver used
  * @returns {string} version
  * @author sudipto
  */


  versionMethod() {
    return (0, _getVersion.default)();
  }

}

var _default = MatrixSolver;
exports.default = _default;