const flatten = function(inputArray) {
  let newArray = [];

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

module.exports = flatten;