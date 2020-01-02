import getVersion from "./../methods/getVersion";
import quadSolver from "./../methods/quadSolver";
import completeSquare from "./../methods/completeSquare";

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
    return this.matrix.map(el => quadSolver(el[0], el[1], el[2]));
  }

  /**
  * Complete squares for all the equations
  * @returns {number[][]} solutionMatrix
  * @author sudipto
  */
  completeSquareAll() {
    return this.matrix.map(el => completeSquare(el[0], el[1], el[2]));
  }

  /**
  * Get the version of the MatrixSolver used
  * @returns {string} version
  * @author sudipto
  */
  versionMethod() {
    return getVersion();
  }
}

export default MatrixSolver;