const twoSum = require("../two-sum").default;

describe("Two Sum", () => {
  it("should handle empty input", () => {
    const result = twoSum();
    expect(result).toEqual(Error("You must pass in an array and a number"));
    const second = twoSum([121]);
    expect(result).toEqual(Error("You must pass in an array and a number"));
  });

  it("should handle invalid input", () => {
    const result = twoSum({ test: "hey" }, "112");
    expect(result).toEqual(Error("You must pass in an array and a number"));
  });

  it("should return the correct result", () => {
    const result = twoSum([1, 6, 4, 5, 3, 3], 7);
    expect(result).toEqual([[6, 1], [3, 4], [3, 4]]);

    const negativeTest = twoSum([40, 11, 19, 17, -12], 28);
    expect(negativeTest).toEqual([[17, 11], [-12, 40]]);
  });
});
