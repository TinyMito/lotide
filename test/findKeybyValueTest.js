const assert = require('chai').assert;
const findKeybyValue   = require('../findKeybyValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeybyValue", () => {
  it("Find TV Shows genre of 'The Wire', returns 'drama'", () => {
    assert.strictEqual(findKeybyValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Find TV Shows genre of 'That '70s Show', returns `undefined`", () => {
    assert.strictEqual(findKeybyValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});