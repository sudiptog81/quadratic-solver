/* eslint-disable no-unused-vars */

const { QuadSolver } = require("./main");

test("Roots are correct", () => {
  expect(QuadSolver(2, 5, -3)).toStrictEqual([0.5, -3]);
});
