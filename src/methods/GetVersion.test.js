import GetVersion from "./GetVersion";
import { version } from "../../package.json";

describe("Version Output", () => {
  test("matches package.json version", () => {
    expect(GetVersion()).toBe(`quadratic-solver v${version}`);
  });
});