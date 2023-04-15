const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArraysTest", () => {
  it("returns true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});