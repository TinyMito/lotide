const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F622} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(getObject, searchValue) {
  // To access the value
  //console.log(getObject.drama) // Single
  //console.log(Object.values(getObject)) // All in array
  // To access the key
  //console.log(Object.keys(getObject)) // All in array

  // The use of Object.keys
  const keys = Object.keys(getObject); // Load all the keys value into var keys
  for (const key of keys) {
    if (getObject[key] === searchValue) { // Index directly from bestTVShowsByGenre object and match the value.
      return key;
    }
  }

  // The use of Object.entries
  /* for (const [key, value] of Object.entries(getObject)) { // Basically load the entire object into array
    //console.log([key, value]);
    if (value === searchValue) {
      return key;
    }
  } */
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
