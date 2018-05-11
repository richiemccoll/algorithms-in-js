const reverseWords = require("../reverse-words").default;

describe("Reverse words", () => {
  it("should handle empty input", () => {
    const result = reverseWords();
    expect(result).toEqual("");
  });

  it("should handle invalid input", () => {
    const result = reverseWords({ test: "invalid" });
    expect(result).toEqual(Error("You have passed in invalid input"));
  });

  it("should reverse the words correctly", () => {
    const result = reverseWords("this is a string of words");
    expect(result).toEqual("siht si a gnirts fo sdrow");
  });
});
