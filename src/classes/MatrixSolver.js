import getVersion from "./../methods/getVersion";
import quadSolver from "./../methods/quadSolver";
import completeSquare from "./../methods/completeSquare";

export default class MatrixSolver {
  constructor(matrix = [[2, 5, -3]]) {
    this.matrix = [...matrix];
  }

  solveAll() {
    return this.matrix.map(el => quadSolver(el[0], el[1], el[2]));
  }

  completeSquareAll() {
    return this.matrix.map(el => completeSquare(el[0], el[1], el[2]));
  }

  versionMethod() {
    return getVersion();
  }
}