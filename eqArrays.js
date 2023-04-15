const eqArrays = function(a,b) {
  if (a.length !== b.length) {
    return false; // Return immediately false of array length not matched.
  };

  for (let i in a) {
    if (Array.isArray(a[i])) {
      if (!eqArrays(a[i], b[i])) {
      // Recursive
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  };

return true; // If loop did not find any false then return true!
};

eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false


module.exports = eqArrays;