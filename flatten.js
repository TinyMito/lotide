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

const flatten = function(inputArray) {
  let newArray = [];

  // Test
  //console.log(inputArray[2][0])
  //console.log(inputArray[2].length)
  //console.log(Array.isArray(inputArray[1]))
  //console.log(Array.isArray(inputArray[2]))

  for (let a = 0; a < inputArray.length; a++) {
    if (Array.isArray(inputArray[a])) {
      for (let b = 0; b < inputArray[a].length; b++) {
        newArray.push(inputArray[a][b]);
      }
    } else {
      newArray.push(inputArray[a]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]