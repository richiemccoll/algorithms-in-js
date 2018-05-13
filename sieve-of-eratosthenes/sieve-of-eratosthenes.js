function sieveOfEratosthenes(num) {
  if (!num || typeof num !== "number") {
    return new Error("You must pass in a number.");
  }

  // first let's create an array of the length of num
  // we want to mark each index with the value true.
  // So we are essentially marking all numbers as prime to begin with.
  let primes = [];
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }

  // Now let's set the indexes where we know they are not prime, as false.
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // j * i is the multiple of each index.
    // for example, let's say that i is currently equal to 3.
    // our j variable starts at 2, so it's value will be 6.
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

module.exports.default = sieveOfEratosthenes;
