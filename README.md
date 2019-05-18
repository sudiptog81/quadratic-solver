# Quadratic Equation Solver

[![npm](https://img.shields.io/npm/v/quadratic-solver.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/quadratic-solver)
[![Drone Status](https://img.shields.io/drone/build/sudipto/quadratic-solver.svg?logo=drone&server=https%3A%2F%2Fci.ghosh.pro&style=flat-square&label=build)](https://ci.ghosh.pro/sudipto/quadratic-solver)
[![Travis Status](https://img.shields.io/travis/com/sudiptog81/quadratic-solver.svg?logo=travis&style=flat-square&label=build)](https://travis-ci.com/sudiptog81/quadratic-solver)
[![Codecov](https://img.shields.io/codecov/c/github/sudiptog81/quadratic-solver.svg?style=flat-square)](https://codecov.io/gh/sudiptog81/quadratic-solver)
[![Dependencies](https://img.shields.io/david/sudiptog81/quadratic-solver.svg?style=flat-square)](https://git.ghosh.pro/sudipto/quadratic-solver/src/branch/master/package.json)

This JavaScript library-slash-module brings the ability of finding roots of a quadratic equation by simply requiring it :)

## Example Usage

### Browser Import

```html
<script src="https://unpkg.com/quadratic-solver"></script>
<script>
    console.log(qs.getVersion());
    const rootsArr = qs.quadSolver(2, 5, -3);
    rootsArr.map(root => console.log(`Root: ${root}`));
</script>
```

### NodeJS Module

```js
const { quadSolver, getVersion } = require("quadratic-solver");
console.log(getVersion());
const rootsArr = quadSolver(2, 5, -3);
rootsArr.map(root => console.log(`Root: ${root}`));
```

## Methods

### quadSolver(a, b, c)

#### Arguments

- **a**: coefficent of the squared term.
- **b**: coefficient of the linear term.
- **c**: constant with its sign.

#### Return Value

- **when both roots are real**: `Array[2]` with the roots of the equation.
- **when only one root is real**: `Array[2]` wherein the first element is the real root and the other element is a warning.
- **when both roots are imaginary**: `Array[2]` in which both elements are warnings.

**Note**: If `a` is equal to `0`, `quadSolverCitardauq()` will be called automatically with the arguments as provided.

### completeSquare(a, b, c)

#### Arguments

- **a**: coefficent of the squared term.
- **b**: coefficient of the linear term.
- **c**: constant with its sign.

#### Return Value

- **when both roots are real**: `Array[2]` with the solutions for the equation.
- **when both roots are imaginary**: `Array[2]` with both elements are in which both elements are `NaN`.

### quadSolverCitardauq(a, b, c)

#### Arguments

Same as quadSolver(a, b, c).

#### Return Value

Same as quadSolver(a, b, c).

### getVersion()

#### Arguments

No arguments are required.

#### Return Value

String containing name and version of the package in `quadratic-solver v0.x.x` format.

## ES6 Classes

### Solver(a, b, c)

#### Properties

- **a**: coefficent of the squared term; default: 2.
- **b**: coefficient of the linear term; default: 5.
- **c**: constant with its sign; default: -3.

#### Methods

- **solve()**: returns output of `quadSolver()` with properties of the instance.
- **completeSquare()**: returns output of `completeSquare()` with properties of the instance.
- **versionMethod()**: returns the output of `getVersion()`.

### MatrixSolver([[a, b, c], [d, e, f], ...])

#### Properties

- **matrix**: array of arrays containing the coefficients of the quadratic and linear terms, followed by the constant (in that order); default: `[[2, 5, -3]]`.

#### Methods

- **solveAll()**: returns output of `quadSolver()` for each array in an array of arrays.
- **completeSquareAll()**: returns output of `completeSquare()` for each array in an array of arrays.
- **versionMethod()**: returns the output of `getVersion()`.

## Author

[Sudipto Ghosh](https://sudipto.ghosh.pro) sudipto(at)ghosh(dot)pro

## License

Source code distributed under the MIT License.
