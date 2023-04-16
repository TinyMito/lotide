# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tinymito/lotide`

**Require it:**

`const _ = require('@tinymito/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: This function compares arrays, return true if matched.
* `assertEqual`: This function compares variable, return true if matched.
* `assertObjectsEqual`: This function compares objects, return true if matched.
* `countLetters(...)`: This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* `countOnly(...)`: This function should take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: This function is a more complex for comparing arrays with sub arrays, return true if matched.
* `eqObjects`: This function is a more complex for comparing objects with sub objects, return true if matched.
* `findKey(...)`: This function should scan the object and return the first key for which the callback returns a truthy value. 
* `findKeybyValue(...)`: This function should scan the object and return the first key which contains the given value. 
* `flatten(...)`: This function flatten an array with sub/multi level arrays into a single-level array.
* `head(...)`: This function is to retrieve the first element from the array
* `letterPositions(...)`: This function returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: This function returns a new array based on the results of the callback function.
* `middle(...)`: This function returns the middle-most element(s) of the given array.
* `tail(...)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(...)`: This function keeps collecting items from a provided array until the callback provided returns a truthy value. 
* `without(...)`: This function returns a subset of a given array, removing unwanted elements. 