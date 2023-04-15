const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { 
    return false;
  };

  for (const key of Object.keys(object1)) { 
    //console.log(object1[key])
    if (typeof object1[key] === 'object' && !Array.isArray(object2[key]) && object1[key] !== null) { 
    // If the property is an object.
      if (!eqObjects(object1[key], object2[key])) {
      // Recursive eqObjects(), if return false.
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // Just compare objects between object1 and object2
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;