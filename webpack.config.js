const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.mjs",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "quadratic-solver.js",
    libraryTarget: "var",
    library: "qs"
  },
};