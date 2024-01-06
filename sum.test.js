const sum = require("./sum");

describe("Math tests", () => {
  test("should sum two numbers", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("should not sum invalid numbers ", () => {
    expect(sum(1, undefined)).toBe(NaN);
  });
});
