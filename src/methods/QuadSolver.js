const QuadSolver = (a, b, c) => {
  if ((Math.pow(b, 2) - (4 * a * c)) < 0) {
    return [
      "No Real Roots",
      "No Real Roots"
    ];
  }

  else if ((Math.pow(b, 2) - (4 * a * c)) == 0) {
    return [
      ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)),
      "Only One Root"
    ];
  }

  else {
    return [
      ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)),
      ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a))
    ];
  }

  // TODO: Add support for returning complex roots
};

export default QuadSolver;
