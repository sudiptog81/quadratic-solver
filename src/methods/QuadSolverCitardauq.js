const QuadSolverCitardauq = (a, b, c) => {
  if (a === 0 || (Math.pow(b, 2) - (4 * a * c)) == 0) {
    return [
      ((2 * c) / (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))),
      "Only One Root"
    ];
  }

  else if ((Math.pow(b, 2) - (4 * a * c)) < 0) {
    return [
      "No Real Roots",
      "No Real Roots"
    ];
  }

  else {
    return [
      ((2 * c) / (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))),
      ((2 * c) / (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))))
    ];
  }

  // TODO: Add support for returning complex roots
};

export default QuadSolverCitardauq;
