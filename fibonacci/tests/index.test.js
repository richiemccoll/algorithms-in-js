const fibonacci = require("../fibonacci").default;

describe("Fibonacci", () => {
  it("should handle empty input", () => {
    const result = fibonacci();
    expect(result).toEqual(Error("You must pass in a number as a position."));
  });

  it("should handle invalid input", () => {
    const result = fibonacci("12121");
    expect(result).toEqual(Error("You must pass in a number as a position."));
  });

  it("should work correctly", () => {
    const first = fibonacci(6);
    expect(first).toEqual(8);

    const second = fibonacci(12);
    expect(second).toEqual(144);

    const third = fibonacci(20);
    expect(third).toEqual(6765);
  });
});
