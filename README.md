# Quadratic Equation Solver

[![npm](https://img.shields.io/npm/v/quadratic-solver.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/quadratic-solver)
[![Drone Status](https://img.shields.io/drone/build/sudipto/quadratic-solver.svg?logo=drone&server=https%3A%2F%2Fci.ghosh.pro&style=flat-square&label=build)](https://ci.ghosh.pro/sudipto/quadratic-solver)
[![Travis Status](https://img.shields.io/travis/sudiptog81/quadratic-solver.svg?logo=travis&style=flat-square&label=build)](https://travis-ci.org/sudiptog81/quadratic-solver)
[![Codecov](https://img.shields.io/codecov/c/github/sudiptog81/quadratic-solver.svg?style=flat-square)](https://codecov.io/gh/sudiptog81/quadratic-solver)
[![Dependencies](https://img.shields.io/david/sudiptog81/quadratic-solver.svg?style=flat-square)](https://git.ghosh.pro/sudipto/quadratic-solver/src/branch/master/package.json)

This NodeJS module brings the ability of finding roots of a quadratic equation by simply requiring it :)

## Example Usage

### Browser Import

```html
<script src="https://unpkg.com/quadratic-solver@latest/dist/quadratic-solver.js"></script>
<script>
    console.log(qs.GetVersion());
    const rootsArr = qs.QuadSolver(2, 5, -3);
    rootsArr.map(root => console.log(`Root: ${root}`));
</script>
```

### NodeJS Module

```js
const { QuadSolver, GetVersion } = require("quadratic-solver");
console.log(GetVersion());
const rootsArr = QuadSolver(2, 5, -3);
rootsArr.map(root => console.log(`Root: ${root}`));
```

## Methods

### QuadSolver(a, b, c)

#### Arguments

- **a**: coefficent of the squared term
- **b**: coefficient of the linear term
- **c**: constant with its sign

#### Return Value

- **when both roots are real**: `Array[2]` with the roots of the equation
- **when only one root is real**: `Array[2]` wherein the first element is the real root and the other element is a warning
- **when both roots are imaginary**: `Array[2]` in which both elements are warnings

### CompleteSquare(a, b, c)

#### Arguments

- **a**: coefficent of the squared term
- **b**: coefficient of the linear term
- **c**: constant with its sign

#### Return Value

- **when both roots are real**: `Array[2]` with the solutions for the equation
- **when both roots are imaginary**: `Array[2]` with both elements are in which both elements are `NaN`

### QuadSolverCitardauq(a, b, c)

#### Arguments

Same as QuadSolver(a, b, c)

#### Return Value

Same as QuadSolver(a, b, c)

### GetVersion()

#### Arguments

No arguments are required

#### Return Value

String containing name and version of the package in `quadratic-solver v0.0.x` format.

## Author

[Sudipto Ghosh](https://sudipto.ghosh.pro)

## License

Source code distributed under the MIT License
