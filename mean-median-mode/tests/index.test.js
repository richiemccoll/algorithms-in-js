const meanMedianMode = require("../mean-median-mode").default;

describe("Mean Median Mode", () => {
  it("should handle empty input", () => {
    const result = meanMedianMode();
    expect(result).toEqual(Error("You must pass in an array"));
  });

  it("should handle invalid input", () => {
    const result = meanMedianMode({ 1: 1, 2: 2 });
    expect(result).toEqual(Error("You must pass in an array"));
  });

  it("should correctly calculate the mean, median and mode", () => {
    const first = meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
    expect(first.mean).toEqual(3.25);
    expect(first.median).toEqual(3.5);
    expect(first.mode).toEqual(["1", "4"]);

    const second = meanMedianMode([9, 10, 23, 10, 23, 9]);
    expect(second.mean).toEqual(14);
    expect(second.median).toEqual(10);
    expect(second.mode).toEqual([]);
  });
});
