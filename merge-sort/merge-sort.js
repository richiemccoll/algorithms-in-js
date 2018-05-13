function merge(array1, array2) {
  // we are going to be repeatedly comparing the first elements
  // of each array passed in, and moving the element of lesser value
  // into a final array each time until all of the elements of both arrays
  // are in the final array. This is the "Merging" technique.
  let result = [];

  // at the end there will be one leftover element in one of these
  // that doesn't get pushed to the final array at first.
  while (array1.length && array2.length) {
    let minElement;

    if (array1[0] < array2[0]) minElement = array1.shift();
    else minElement = array2.shift();
    result.push(minElement);
  }

  // handle the remaining left over element
  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }

  return result;
}

function mergeSort(array) {
  if (!array || typeof array.map !== "function") {
    return new Error("Element passed in must be an array");
  }

  // if array only has 0 or 1 elements, then it is already sorted
  if (array.length < 2) {
    return array;
  }

  // First, split the array into two halves.
  const middleIndex = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

module.exports.default = mergeSort;
