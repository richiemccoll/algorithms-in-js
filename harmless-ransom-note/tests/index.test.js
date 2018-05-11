const harmlessRansomNote = require("../harmless-ransom-note").default;

describe("Harmless Ransom Note", () => {
  test("should be able to handle invalid input", () => {
    expect(harmlessRansomNote(1, 2)).toEqual(
      Error("You have passed in invalid input")
    );
    expect(harmlessRansomNote({ test: "hey" }, 121211)).toEqual(
      Error("You have passed in invalid input")
    );
  });

  test("should be able to handle empty input", () => {
    expect(harmlessRansomNote(" ", " ")).toBeFalsy();
  });

  test("should be able to produce a ransom note", () => {
    const validMagazineText = `
        puerto rico is a place of great wonder and excitement it has many secret waterfall locations,
        that i am an admirer of you must hike quite a distance to find the secret places as they are far
        from populated areas but it is worth the effort a tip i have for you is to go early in the morning
        when it is not so hot out also note that you must wear hiking boots
        this is one of the best places i have ever visited
    `;

    expect(
      harmlessRansomNote(
        "this is a secret note for you from a secret admirer",
        validMagazineText
      )
    ).toBe(true);
  });
});
