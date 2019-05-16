import GetVersion from "./../methods/GetVersion";
import QuadSolver from "./../methods/QuadSolver";
import CompleteSquare from "./../methods/CompleteSquare";

export default class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solve() {
    return QuadSolver(this.a, this.b, this.c);
  }

  completeSquare() {
    return CompleteSquare(this.a, this.b, this.c);
  }

  versionMethod() {
    return GetVersion();
  }
}
