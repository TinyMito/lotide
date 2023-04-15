const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("Letter h position, returns [0]", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("Letter e position, returns [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("Letter l position, returns [2, 3]", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("Letter o position, returns [4]", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});