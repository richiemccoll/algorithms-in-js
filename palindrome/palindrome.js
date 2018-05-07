function isPalindrome(word) {
  if (typeof word !== "string") {
    return false;
  }

  if (!word) {
    return false;
  }

  if (word.length === 1) {
    return true;
  }

  const validCharacters = "abcdefghijklmnopoqrstuvwxyz".split("");
  const lettersArray = word
    .toLowerCase()
    .split("")
    .filter(word => validCharacters.indexOf(word) > -1);

  return lettersArray.join("") === lettersArray.reverse().join("");
}

module.exports.default = isPalindrome;
