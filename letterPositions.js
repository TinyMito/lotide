const eqArrays = function(a,b) {
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

const assertArraysEqual = function(arrayData1, arrayData2) {
  if (!eqArrays(arrayData1, arrayData2)) {
    console.log('Arrays does not match.');
  } else {
    console.log('Arrays matched!');
  }
};

const letterPositions = function(sentence) {
  const results = {}; // Declare object
  for (let i = 0; i < sentence.length; i++) { // Traditional loop to determine the index of each letter for of will not work on duplicated value
    const letter = sentence[i]; // Each letter into string
    if (letter !== " ") { // If it is not a empty space
      if (results[letter] === undefined) { // If the letter doesn't exist in the object key
        results[letter] = [i]; // Add key as array
      } else {
        results[letter].push(i); // If not push a value into the array
      }
    }
  }
  
  return results;
};

//console.log(assertArraysEqual(letterPositions("hello"),{a: [0],e: [1],l: [2,3],o: [4]}));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);