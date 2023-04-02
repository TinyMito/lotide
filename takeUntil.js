const eqArrays = function(a,b) {
  if (a.length !== b.length) {
    return false; // Return immediately false of array length not matched.
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { // Finds the bad sheep!
        return false;
      }
    }
    return true; // If loop did not find any false then return true!
  }
};

const assertArraysEqual = function(arrayData1, arrayData2) {
  if (!eqArrays(arrayData1, arrayData2)) {
    console.log('Arrays does not match.');
  } else {
    console.log('Arrays matched!');
  }
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])

/* 
Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
 */