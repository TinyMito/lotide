const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; // Return immediately false of array length not matched.
  };

  for (let i in array1) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
      // Recursive
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  };

return true; // If loop did not find any false then return true!
};

module.exports = eqArrays;