function fibonacci(position) {
  if (!position || typeof position !== "number") {
    return new Error("You must pass in a number as a position.");
  }

  // as this will use recursion lets define the base case.
  if (position < 3) {
    return 1;
  } else return fibonacci(position - 1) + fibonacci(position - 2);
}

module.exports.default = fibonacci;
