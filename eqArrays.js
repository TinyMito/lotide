const eqArrays = function(a,b) {
  if (a.length !== b.length) {
    return false; // Return immediately false of array length not matched.
  };

  for (let i in a) {
    console.log(a[i])
    if (Array.isArray(a[i])) {
      console.log('Array!')
      if (!Array.isArray(a[i], b[i])) {
        console.log('false')
        return false;
      }
    } else if (a[i] !== b[i]) {
      console.log('false')
      return false;
    }
  };

/* for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) { // Finds the bad sheep!
    return false;
  }
} */
return true; // If loop did not find any false then return true!
};

//eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
//eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false


module.exports = eqArrays;