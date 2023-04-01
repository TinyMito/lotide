const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F622} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  const count = {};
  for (const letter of letters) {
    if (letter !== " ") {
      count[letter] = letter in count ? count[letter] + 1 : 1;
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));