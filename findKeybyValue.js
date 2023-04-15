const findKeybyValue = function(getObject, searchValue) {

  const keys = Object.keys(getObject); // Load all the keys value into var keys
  for (const key of keys) {
    if (getObject[key] === searchValue) { // Index directly from 
      return key;
    }
  }
}

module.exports = findKeybyValue;