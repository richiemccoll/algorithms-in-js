const binarySearch = require("../binary-search").default;

describe("Binary Search", () => {
  it("should handle empty input", () => {
    const result = binarySearch();
    expect(result).toEqual(Error("You must pass in an array and a number"));
    const second = binarySearch([121]);
    expect(result).toEqual(Error("You must pass in an array and a number"));
  });

  it("should handle invalid input", () => {
    const result = binarySearch({ test: "hey" }, "112");
    expect(result).toEqual(Error("You must pass in an array and a number"));
  });

  it("should correctly find the key if present", () => {
    const result = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
    expect(result).toBe(true);

    const second = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5);
    expect(second).toBe(true);
  });

  it("should correctly return false if key is not present", () => {
    const result = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 100);
    expect(result).toBe(false);
  });
});
