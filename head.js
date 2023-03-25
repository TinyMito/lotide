// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F622} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(a) {
  return a.slice(1);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");