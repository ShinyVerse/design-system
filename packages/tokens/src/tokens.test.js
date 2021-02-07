"use strict";

// const tokens = require('..');
const { tokens } = require("../src/tokens");

describe("tokens", () => {
  it("returns correctly", () => {
    expect(tokens()).toStrictEqual({
      white: "#fff",
    });
  });
});
