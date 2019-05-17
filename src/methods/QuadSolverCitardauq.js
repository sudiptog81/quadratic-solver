const quadSolverCitardauq = (a, b, c) => {
  if (a === 0 || ((b ** 2) - (4 * a * c)) == 0) {
    return [
      ((2 * c) / (-1 * b - Math.sqrt((b ** 2) - (4 * a * c)))),
      "Only One Root"
    ];
  }

  else if (((b ** 2) - (4 * a * c)) < 0) {
    return [
      "No Real Roots",
      "No Real Roots"
    ];
  }

  else {
    return [
      ((2 * c) / (-1 * b - Math.sqrt((b ** 2) - (4 * a * c)))),
      ((2 * c) / (-1 * b + Math.sqrt((b ** 2) - (4 * a * c))))
    ];
  }

  // TODO: Add support for returning complex roots
};

export default quadSolverCitardauq;
