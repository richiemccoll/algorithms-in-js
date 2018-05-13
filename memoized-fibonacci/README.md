# Problem

If you have a look at the fibonacci implementation here, this is an example of an algorithm that will run at an exponential runtime. In this implementation we are going to introduce a technique called memoization.

## Memoization

* Check to see if the number is in the cache.
* If number is in the cache, use that number.
* If number is not in the cache, calculate it and put in the cache so it can be used multiple times in the future.
