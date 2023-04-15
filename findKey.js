const findKey = function(getObject, searchValue) {
  // Extract object to array
  const keys = Object.keys(getObject);

  for (const key of keys) {
    if (searchValue(getObject[key])) {
      // If the key match searchValue, return true
      return key;
    }
  }
}

module.exports = findKey;