const flatten = function(inputArray) {
  // Create a new array to output
  const newArray = [];

  for (let a = 0; a < inputArray.length; a++) {
    if (Array.isArray(inputArray[a])) {
      // Condition if the element is an Array itself
      for (let b = 0; b < inputArray[a].length; b++) {
        // Push each element into the newArray
        newArray.push(inputArray[a][b]);
      }
    } else {
      // Else just push the element straight into newArray
      newArray.push(inputArray[a]);
    }
  }
  return newArray;
};

module.exports = flatten;