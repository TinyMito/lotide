const countOnly = function(allItems, itemsToCount) {
  // Create new object to store the count of each element
  const results = {}

  for (const item of allItems) {
    // Run this condition if the key is true
    if (itemsToCount[item]) {
      // Condition check if the key existed in the result object,
      // if existed; +1 count and if not initial the first count 1
      console.log(item)
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

module.exports = countOnly;