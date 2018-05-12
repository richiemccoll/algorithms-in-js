function twoSum(numbersArray, sum) {
  const emptyInput = !numbersArray || !sum;

  if (emptyInput) {
    return new Error("You must pass in an array and a number");
  }

  const invalidInput =
    typeof numbersArray.map !== "function" && typeof sum !== "number";

  if (invalidInput) {
    return new Error("You must pass in an array and a number");
  }

  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numbersArray.length; i++) {
    let current = numbersArray[i];
    let counterpart = sum - current;

    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([current, counterpart]);
    }

    hashTable.push(current);
  }

  return pairs;
}

module.exports.default = twoSum;
