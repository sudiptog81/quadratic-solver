const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "quadratic-solver.js",
    libraryTarget: "var",
    library: "qs"
  },
};