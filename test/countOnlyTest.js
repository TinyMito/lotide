const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("Count only 'Jason', returns 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("Count only 'Karima', returns undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("Count only 'Fang', returns 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("Count only 'Agouhanna', returns undefined", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});