function reverseWords(string = "") {
  if (typeof string !== "string") {
    return new Error("You have passed in invalid input");
  }

  const words = string.split(" ");
  let reversedWords = [];

  words.forEach(word => {
    // We don't want to use array.reverse()
    // We want to loop backwards through
    // the word array and push the result to this empty string.
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  });

  return reversedWords.join(" ");
}

module.exports.default = reverseWords;
