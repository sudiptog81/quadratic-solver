import getVersion from "./../methods/getVersion";
import quadSolver from "./../methods/quadSolver";
import completeSquare from "./../methods/completeSquare";

export default class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solve() {
    return quadSolver(this.a, this.b, this.c);
  }

  completeSquare() {
    return completeSquare(this.a, this.b, this.c);
  }

  versionMethod() {
    return getVersion();
  }
}
