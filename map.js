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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])