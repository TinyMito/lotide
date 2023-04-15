const map = function(array, callback) {
  // New array
  const results = [];

  for (let item of array) {
    // Callback function
    results.push(callback(item));
  }
  return results;
};

module.exports = map;