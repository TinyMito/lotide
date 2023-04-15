const assert = require('chai').assert;
const map   = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

describe("#map", () => {
  it("Return first letter of `ground, control, to, major, tom`, returns [ 'g', 'c', 't', 'm', 't' ]", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
});