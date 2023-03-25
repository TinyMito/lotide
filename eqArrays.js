const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F622} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a,b) {
  //console.log(a);
  //console.log(b);

  if (a.length !== b.length) {
    return false; // Return immediately false of array length not matched.
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { // Finds the bad sheep!
        return false;
      }
    }
    return true; // If loop did not find any false then return true!
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false