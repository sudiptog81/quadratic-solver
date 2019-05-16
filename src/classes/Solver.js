import { version } from "../../package.json";
export default class Solver {
  constructor(a = 2, b = 5, c = -3) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.version = version;
  }

  versionMethod() {
    return this.version;
  }
}
