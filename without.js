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

module.exports = without;