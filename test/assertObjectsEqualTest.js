const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it(`Compare {a:1,b:3},{b:3,a:1}, return false`, () => {
    assert.isTrue(assertObjectsEqual({a:1,b:3},{b:3,a:1}));
  });
  it(`Compare {a:1,b:3},{b:3,a:15}, return true`, () => {
    assert.isFalse(assertObjectsEqual({a:1,b:3},{b:3,a:15}));
  });
});