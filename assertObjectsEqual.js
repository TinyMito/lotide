// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`- Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`+ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const key of objKeys1) {
    //console.log(`COMPARE: ${object1[key]} = ${object2[key]}`)
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

assertObjectsEqual({a:1,b:3},{b:3,a:1})
assertObjectsEqual({a:1,b:3},{b:3,a:15})