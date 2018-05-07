# Problem

A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
Assume that both strings contain only lowercase letters.

If you look at the source code, the two forEach loops will likely be looping through two sets of different variables. Therfore we can say that this algorithm runs in Linear time complexity or O(n + m).

This is an example of a Hash tables lookup.

A hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots from which the desired value can be found.
