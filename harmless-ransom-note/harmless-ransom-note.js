function harmlessRansomNote(note, magazineText) {
  const validInput =
    typeof note === "string" && typeof magazineText === "string";
  if (!validInput) return new Error("You have passed in invalid input");

  const noteArray = note.split(" ").filter(Boolean);
  const magazineArray = magazineText.split(" ").filter(Boolean);
  const magazineHashTable = {};

  if (noteArray.length < 1 && magazineArray.length < 1) {
    return false;
  }

  magazineArray.forEach(word => {
    if (!magazineHashTable[word]) magazineHashTable[word] = 0;
    magazineHashTable[word]++;
  });

  let noteIsPossible = true;

  noteArray.forEach(word => {
    if (magazineHashTable[word]) {
      magazineHashTable[word]--;

      if (magazineHashTable[word] < 0) {
        return (noteIsPossible = false);
      }
    } else {
      return (noteIsPossible = false);
    }
  });

  return noteIsPossible;
}

module.exports.default = harmlessRansomNote;
