function caesarCipher(str, num) {
  const validInput = typeof str === "string" && typeof num === "number";

  if (!validInput) {
    return new Error("You have passed in invalid input");
  }

  num = num % 26;
  const lowercaseStr = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < lowercaseStr.length; i++) {
    let currentLetter = lowercaseStr[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

module.exports.default = caesarCipher;
