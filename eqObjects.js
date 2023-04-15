const eqObjects = function(object1, object2) {
  // Return false if both object1 and object2 length unequal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    // Check condition if it is an object
    if (typeof object1[key] === 'object' && !Array.isArray(object2[key]) && object1[key] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
      // Recursive eqObjects(), if return false
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // Just compare objects between object1 and object2
      return false;
    }
  }

  // If loop did not find any false then return true!
  return true;
};

module.exports = eqObjects;