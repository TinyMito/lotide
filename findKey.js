const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F622} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(getObject, searchValue) {
  const keys = Object.keys(getObject);
  for (const key of keys) {
    if (searchValue(getObject[key])) {
      return key;
    }
  }
}

assertEqual(
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"