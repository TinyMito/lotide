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

const middle = function(inputArray) {
  if (inputArray.length < 3) {
    return [];
  }

  if (inputArray.length % 2 === 0) {
    // Even numbers does something
    let middleArr = Math.floor(inputArray.length / 2);
    return inputArray.slice(middleArr - 1, middleArr + 1);
  } else {
    // Odd numbers does something
    let middleArr = Math.floor(inputArray.length / 2);
    return inputArray.slice(middleArr, middleArr + 1);
  }
};

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]),[4, 5]); // => [4, 5]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]),[5]); // => [5]