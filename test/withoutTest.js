const assert = require('chai').assert;
const without   = require('../without');

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it(`returns ["hello", "world"]`, () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});