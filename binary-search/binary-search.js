function binarySearch(numbersArray, key) {
  const emptyInput = !numbersArray || !key;

  if (emptyInput) {
    return new Error("You must pass in an array and a number");
  }

  const invalidInput =
    typeof numbersArray.map !== "function" && typeof key !== "number";

  if (invalidInput) {
    return new Error("You must pass in an array and a number");
  }

  let middleIndex = Math.floor(numbersArray.length / 2);
  let middleElement = numbersArray[middleIndex];

  // Set the base case.
  if (middleElement === key) {
    return true;
  }

  // check if we have to discard the lower half of the array.
  else if (middleElement < key && numbersArray.length > 1) {
    return binarySearch(
      numbersArray.splice(middleIndex, numbersArray.length),
      key
    );
  }

  // now check to see if we have to do the opposite case,
  // do we want to discard the other half of the array?
  else if (middleElement > key && numbersArray.length > 1) {
    return binarySearch(numbersArray.splice(0, middleIndex), key);
  } else return false;
}

module.exports.default = binarySearch;
