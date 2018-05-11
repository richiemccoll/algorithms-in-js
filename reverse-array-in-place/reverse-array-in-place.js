function reverseArrayInPlace(array) {
  if (!array || typeof array.map !== "function") {
    return new Error("Element passed in must be an array");
  }
  // We only want to loop through the first half of the array
  // If we had this code:
  // for (let i = 0; i < array.length; i++)
  // then you would see that the array returned would be the array passed in.

  for (let i = 0; i < array.length / 2; i++) {
    // we want to switch the first element in the array
    // with the last element in the array.
    // we want to switch the second element in the array
    // with the second last element in the array and so on.

    // Store a ref to current array item.
    let temp = array[i];

    // Set the current array index to it's counterpart
    array[i] = array[array.length - 1 - i];

    // Switch the counterpart back to the current array item
    // stored in the temporary variable.
    array[array.length - 1 - i] = temp;
  }

  return array;
}

module.exports.default = reverseArrayInPlace;
