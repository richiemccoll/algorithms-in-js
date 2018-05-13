function memoizedFibonacci(position, cache = []) {
  if (!position || typeof position !== "number") {
    return new Error("You must pass in a number as a position.");
  }

  // Check cache first.
  if (cache[position]) {
    return cache[position];
  } else {
    // Now set the recursive base case.
    if (position < 3) {
      return 1;
    } else {
      cache[position] =
        memoizedFibonacci(position - 1, cache) +
        memoizedFibonacci(position - 2, cache);
    }
  }

  return cache[position];
}

module.exports.default = memoizedFibonacci;
