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

module.exports = middle;