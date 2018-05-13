const mergeSort = require("../merge-sort").default;

describe("Merge Sort", () => {
  it("should handle empty and invalid input", () => {
    const result = mergeSort();
    expect(result).toEqual(Error("Element passed in must be an array"));
    const invalid = mergeSort({ test: "hey" });
    expect(invalid).toEqual(Error("Element passed in must be an array"));
  });

  it("should work correctly", () => {
    const first = mergeSort([2, 14, 1, 3, 6]);
    expect(first).toEqual([1, 2, 3, 6, 14]);

    const second = mergeSort([20, 20, 1, 5, 24, 46, 18, 46]);
    expect(second).toEqual([1, 5, 18, 20, 20, 24, 46, 46]);

    const negative = mergeSort([-9, -12, 1, 3, -8]);
    expect(negative).toEqual([-12, -9, -8, 1, 3]);
  });
});
