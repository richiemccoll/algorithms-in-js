const isPalindrome = require("../palindrome").default;

describe("isPalindrome", () => {
  it("should handle empty input", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should handle invalid input", () => {
    expect(isPalindrome(12121)).toBe(false);
    expect(isPalindrome({ test: "hey" })).toBe(false);
    expect(isPalindrome([12121])).toBe(false);
  });

  it("should detect a valid palindrome", () => {
    expect(isPalindrome("Madam, Im Adam")).toBe(true);
    expect(isPalindrome("A but tuba.")).toBe(true);
    expect(isPalindrome("A Santa dog lived as a devil God at NASA.")).toBe(
      true
    );
  });

  it("should detect an invalid palindrome", () => {
    expect(isPalindrome("I am not a palindrome")).toBe(false);
  });
});
