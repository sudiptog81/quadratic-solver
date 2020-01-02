import quadSolverCitardauq from "./quadSolverCitardauq";

/**
 * Solve a given quadratic equation
 * @param {number} a coefficient of the quadratic term
 * @param {number} b coefficient of the linear term
 * @param {number} c constant term
 * @returns {number[] | string[] | [number, string]} solutions
 * @author sudipto
 */
const quadSolver = (a, b, c) => {
  if (a === 0) {
    return quadSolverCitardauq(a, b, c);
  }

  else if (((b ** 2) - (4 * a * c)) < 0) {
    return [
      "No Real Roots",
      "No Real Roots"
    ];
  }

  else if (((b ** 2) - (4 * a * c)) == 0) {
    return [
      ((-1 * b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)),
      "Only One Root"
    ];
  }

  else {
    return [
      ((-1 * b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)),
      ((-1 * b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a))
    ];
  }

  // TODO: Add support for returning complex roots
};

export default quadSolver;
