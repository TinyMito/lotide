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

const without = function(inputArray, removeElement) {
  let newArray = []; // To make sure it is non-destructive of the original array.
  for (let i = 0; i < inputArray.length; i++) {
    let doRemove = false; // A flag to prevent trigger removal function
    for (let x = 0; x < removeElement.length; x++) { // Since the 2nd element is an array itself, needs to for loop.
      if (inputArray[i] === removeElement[x]) { 
        doRemove = true; // If matched, perform doRemove [i] element.
      }
    }
    if (!doRemove) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);