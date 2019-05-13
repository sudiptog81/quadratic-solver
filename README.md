# Quadratic Equation Solver

[![Drone Status](https://ci.ghosh.pro/api/badges/sudipto/quadratic-solver/status.svg)](https://ci.ghosh.pro/sudipto/quadratic-solver)

This NodeJS module brings the ability of finding roots of a quadratic equation by simply requiring it :)

## Example Usage

```js
const { QuadSolver, QuadSolverCitardauq } = require("quadratic-solver");
const rootsArr = QuadSolver(2, 5, -3);
rootsArr.map(root => console.log(`Root: ${root}`));
```

_Note: Citardauq formula available as `QuadSolverCitardauq()`_

## Author

Sudipto Ghosh ([sudipto.ghosh.pro](https://sudipto.ghosh.pro))
