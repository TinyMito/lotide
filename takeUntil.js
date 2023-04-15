const takeUntil = function(array, callback) {
  let takeArray = [];
  for (const data of array) {
    if (callback(data)) {
      break; // Stop processing loop if true
    } else {
      //console.log(data)
      takeArray.push(data)
    }
  }
  return takeArray;  
}

module.exports = takeUntil;