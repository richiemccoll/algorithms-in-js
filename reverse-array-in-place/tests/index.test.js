const reverseArray = require("../reverse-array-in-place").default;

describe("Reverse Array in place", () => {
  it("should handle empty and invalid input", () => {
    const result = reverseArray();
    expect(result).toEqual(Error("Element passed in must be an array"));
    const invalid = reverseArray({ test: "hey" });
    expect(invalid).toEqual(Error("Element passed in must be an array"));
  });

  it("should correctly reverse an array in place", () => {
    const result = reverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
