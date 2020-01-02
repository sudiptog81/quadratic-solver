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
 * Create an instance of Solver
 * @param {number} a coefficient of the quadratic term
 * @param {number} b coefficient of the linear term
 * @param {number} c constant term
 * @author sudipto
 */
class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  /**
   * Solve the given equation
   * @returns {number[]} solutionArray
   * @author sudipto
   */


  solve() {
    return (0, _quadSolver.default)(this.a, this.b, this.c);
  }
  /**
   * Complete squares for the given equation
   * @returns {number[]} solutionArray
   * @author sudipto
   */


  completeSquare() {
    return (0, _completeSquare.default)(this.a, this.b, this.c);
  }
  /**
   * Get the version of the Solver used
   * @returns {string} version
   * @author sudipto
   */


  versionMethod() {
    return (0, _getVersion.default)();
  }

}

var _default = Solver;
exports.default = _default;