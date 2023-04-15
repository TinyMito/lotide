const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 2", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });
});

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#words", () => {
  it("returns 3", () => {
    assert.strictEqual(words.length, 3);
  });
});