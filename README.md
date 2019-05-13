# Quadratic Equation Solver

[![npm](https://img.shields.io/npm/v/quadratic-solver.svg?style=flat-square)](https://www.npmjs.com/package/quadratic-solver)
[![Drone Status](https://img.shields.io/drone/build/sudipto/quadratic-solver.svg?server=https%3A%2F%2Fci.ghosh.pro&style=flat-square&label=drone%20build)](https://ci.ghosh.pro/sudipto/quadratic-solver)
[![Travis Status](https://img.shields.io/travis/sudiptog81/quadratic-solver.svg?style=flat-square&label=travis%20build)](https://travis-ci.org/sudiptog81/quadratic-solver)
[![Dependencies](https://img.shields.io/david/sudiptog81/quadratic-solver.svg?style=flat-square)](https://git.ghosh.pro/sudipto/quadratic-solver/src/branch/master/package.json)

This NodeJS module brings the ability of finding roots of a quadratic equation by simply requiring it :)

#### Example Usage

```js
const qs = require("quadratic-solver");
console.log(qs.GetVersion());
const rootsArr = qs.QuadSolver(2, 5, -3);
rootsArr.map(root => console.log(`Root: ${root}`));
```

**_Note:_** Citardauq formula available as `qs.QuadSolverCitardauq()`

#### Author

Sudipto Ghosh ([sudipto.ghosh.pro](https://sudipto.ghosh.pro))
