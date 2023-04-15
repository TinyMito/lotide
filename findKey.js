const findKey = function(getObject, searchValue) {
  // Extract object to array
  const keys = Object.keys(getObject);

  for (const key of keys) {
    // If the key match searchValue, return true
    if (searchValue(getObject[key])) {
      return key;
    }
  }
}

module.exports = findKey;