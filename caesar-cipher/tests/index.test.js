const caesarCipher = require("../casesar-cipher").default;

describe("Caesar Cipher", () => {
  it("should handle empty input, resort to default params", () => {
    const result = caesarCipher();
    expect(result).toEqual(Error("You have passed in invalid input"));
  });

  it("should handle invalid input types", () => {
    const result = caesarCipher({ string: "test", number: 121 });
    expect(result).toEqual(Error("You have passed in invalid input"));
  });

  it("should correctly shift letters", () => {
    const firstResult = caesarCipher("Zoo Keeper", 2);
    expect(firstResult).toEqual("Bqq Mggrgt");
    const secondResult = caesarCipher("Big car", -16);
    expect(secondResult).toEqual("Lsq mkb");
    const outrageousResult = caesarCipher("Javascript", -900);
    expect(outrageousResult).toEqual("Tkfkcmbszd");
  });
});
