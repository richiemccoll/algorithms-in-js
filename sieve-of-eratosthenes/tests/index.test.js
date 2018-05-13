const sieveOfEratosthenes = require("../sieve-of-eratosthenes").default;

describe("Sieve of Eratosthenes", () => {
  it("should handle empty input", () => {
    const result = sieveOfEratosthenes();
    expect(result).toEqual(Error("You must pass in a number."));
  });

  it("should handle invalid input", () => {
    const result = sieveOfEratosthenes("12121");
    expect(result).toEqual(Error("You must pass in a number."));
  });

  it("should work correctly", () => {
    const first = sieveOfEratosthenes(10);
    expect(first).toEqual([2, 3, 5, 7]);

    const second = sieveOfEratosthenes(20);
    expect(second).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
