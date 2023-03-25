// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\u{1F600} Assertion Passed: ' + [actual] + ' === ' + [expected]);
  } else {
    console.log('\u{1F622} Assertion Failed: ' + [actual] + ' !== ' + [expected]);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Kevin", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Kevin", "Kevin");
assertEqual(1, 2);