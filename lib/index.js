"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Solver = exports.GetVersion = exports.CompleteSquare = exports.QuadSolverCitardauq = exports.QuadSolver = void 0;

var _package = require("../package.json");

/* eslint-disable no-unused-vars */
const QuadSolver = (a, b, c) => {
  if (Math.pow(b, 2) - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else if (Math.pow(b, 2) - 4 * a * c == 0) {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), "Only One Root"];
  } else {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)];
  } // TODO: Add support for returning complex roots

};

exports.QuadSolver = QuadSolver;

const QuadSolverCitardauq = (a, b, c) => {
  if (Math.pow(b, 2) - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else if (Math.pow(b, 2) - 4 * a * c == 0) {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), "Only One Root"];
  } else {
    return [2 * c / (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)), 2 * c / (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))];
  } // TODO: Add support for returning complex roots

};

exports.QuadSolverCitardauq = QuadSolverCitardauq;

const CompleteSquare = (a, b, c) => {
  b = b / a;
  c = c / a;
  return [Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2, -1 * Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2]; // TODO: Add support for returning complex roots instead of NaN
};

exports.CompleteSquare = CompleteSquare;

const GetVersion = () => `quadratic-solver v${_package.version}`;

exports.GetVersion = GetVersion;

class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.version = _package.version;
  }

  versionMethod() {
    return this.version;
  }

}

exports.Solver = Solver;