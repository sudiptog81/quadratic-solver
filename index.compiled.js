"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Solver = exports.GetVersion = exports.CompleteSquare = exports.QuadSolverCitardauq = exports.QuadSolver = void 0;

var _package = require("./package.json");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuadSolver = function QuadSolver(a, b, c) {
  if (Math.pow(b, 2) - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else if (Math.pow(b, 2) - 4 * a * c == 0) {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), "Only One Root"];
  } else {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)];
  } // TODO: Add support for returning complex roots

};

exports.QuadSolver = QuadSolver;

var QuadSolverCitardauq = function QuadSolverCitardauq(a, b, c) {
  if (Math.pow(b, 2) - 4 * a * c < 0) {
    return ["No Real Roots", "No Real Roots"];
  } else if (Math.pow(b, 2) - 4 * a * c == 0) {
    return [(-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a), "Only One Root"];
  } else {
    return [2 * c / (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)), 2 * c / (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))];
  } // TODO: Add support for returning complex roots

};

exports.QuadSolverCitardauq = QuadSolverCitardauq;

var CompleteSquare = function CompleteSquare(a, b, c) {
  b = b / a;
  c = c / a;
  return [Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2, -1 * Math.sqrt(Math.pow(b / 2, 2) - c) - b / 2]; // TODO: Add support for returning complex roots instead of NaN
};

exports.CompleteSquare = CompleteSquare;

var GetVersion = function GetVersion() {
  return "quadratic-solver v".concat(_package.version);
};

exports.GetVersion = GetVersion;

var Solver =
/*#__PURE__*/
function () {
  function Solver(a, b, c) {
    _classCallCheck(this, Solver);

    this.a = a;
    this.b = b;
    this.c = c;
    this.version = _package.version;
  }

  _createClass(Solver, [{
    key: "versionMethod",
    value: function versionMethod() {
      return this.version;
    }
  }]);

  return Solver;
}();

exports.Solver = Solver;
