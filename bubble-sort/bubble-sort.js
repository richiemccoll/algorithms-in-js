function bubbleSort(array) {
  if (!array || typeof array.map !== "function") {
    return new Error("Element passed in must be an array");
  }

  for (let i = array.length; i > 0; i--) {
    // This tells the pass through to stop one index less than the previous
    // This is what let's the larger numbers "Bubble" to the end.
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

module.exports.default = bubbleSort;
