/* eslint-disable no-unused-vars */

export const QuadSolver = (a, b, c) => {
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

export const QuadSolverCitardauq = (a, b, c) => {
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
      ((2 * c) / (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))),
      ((2 * c) / (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))))
    ];
  }

  // TODO: Add support for returning complex roots
};

export const CompleteSquare = (a, b, c) => {
  b = b / a; c = c / a;

  return [
    (Math.sqrt(Math.pow((b / 2), 2) - c) - (b / 2)),
    ((-1 * (Math.sqrt(Math.pow((b / 2), 2) - c))) - (b / 2)),
  ];

  // TODO: Add support for returning complex roots instead of NaN
};

export const GetVersion = () => `quadratic-solver v${require("./package.json").version}`;
