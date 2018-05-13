const memoizedFibonacci = require("../memoized-fibonacci").default;

describe("Memoized Fibonacci", () => {
  it("should handle empty input", () => {
    const result = memoizedFibonacci();
    expect(result).toEqual(Error("You must pass in a number as a position."));
  });

  it("should handle invalid input", () => {
    const result = memoizedFibonacci("12121");
    expect(result).toEqual(Error("You must pass in a number as a position."));
  });

  it("should work correctly", () => {
    const first = memoizedFibonacci(6);
    expect(first).toEqual(8);

    const second = memoizedFibonacci(12);
    expect(second).toEqual(144);

    const third = memoizedFibonacci(20);
    expect(third).toEqual(6765);
  });
});
