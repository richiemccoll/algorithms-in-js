function getMean(array) {
  let sum = 0;

  array.forEach(num => {
    sum += num;
  });

  return sum / array.length;
}

function getMedian(array) {
  let sorted = array.sort(function(a, b) {
    return a - b;
  });

  let median;

  // if there are an odd amount of numbers in the list.
  if (sorted.length % 2 !== 0) {
    // Use Math.floor to round down.
    median = sorted[Math.floor(sorted.length / 2)];
  } else {
    // now if there are an even amount of numbers.
    // Grab the two in the middle and take the average of these.
    let mid1 = sorted[sorted.length / 2 - 1];
    let mid2 = sorted[sorted.length / 2];

    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  let modeHashTable = {};

  array.forEach(num => {
    if (!modeHashTable[num]) modeHashTable[num] = 0;
    modeHashTable[num]++;
  });

  let maxFrequency = 0;
  let modes = [];

  for (let num in modeHashTable) {
    if (modeHashTable[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeHashTable[num];
    } else if (modeHashTable[num] === maxFrequency) {
      modes.push(num);
    }
  }

  if (modes.length === Object.keys(modeHashTable).length) {
    modes = [];
  }
  return modes;
}

function getMeanMedianMode(array) {
  if (!array || typeof array.map !== "function") {
    return new Error("You must pass in an array");
  }
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

module.exports.default = getMeanMedianMode;
