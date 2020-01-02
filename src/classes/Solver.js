import getVersion from "./../methods/getVersion";
import quadSolver from "./../methods/quadSolver";
import completeSquare from "./../methods/completeSquare";

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
    return quadSolver(this.a, this.b, this.c);
  }

  /**
   * Complete squares for the given equation
   * @returns {number[]} solutionArray
   * @author sudipto
   */
  completeSquare() {
    return completeSquare(this.a, this.b, this.c);
  }

  /**
   * Get the version of the Solver used
   * @returns {string} version
   * @author sudipto
   */
  versionMethod() {
    return getVersion();
  }
}

export default Solver;
