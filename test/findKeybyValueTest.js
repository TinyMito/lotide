const assert = require('chai').assert;
const findKeybyValue   = require('../findKeybyValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeybyValue", () => {
  it("returns 'drama'", () => {
    assert.strictEqual(findKeybyValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined", () => {
    assert.strictEqual(findKeybyValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});