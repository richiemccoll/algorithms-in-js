const maxStockProfit = require("../max-stock-profit").default;

describe("Max Stock Profit", () => {
  it("should handle empty and invalid input", () => {
    const result = maxStockProfit();
    expect(result).toEqual(Error("Prices passed in must be an array"));
    const invalid = maxStockProfit({ test: "hey" });
    expect(invalid).toEqual(Error("Prices passed in must be an array"));
  });

  it("should work correctly", () => {
    const result = maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
    expect(result).toEqual(22);

    const second = maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
    expect(second).toEqual(12);
  });
});
