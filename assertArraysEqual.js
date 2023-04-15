const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayData1, arrayData2) {
  if (!eqArrays(arrayData1, arrayData2)) {
    console.log('Arrays does not match.');
  } else {
    console.log('Arrays matched!');
  }
};

module.exports = assertArraysEqual;