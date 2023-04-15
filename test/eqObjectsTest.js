const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

describe("#eqObjects", () => {
  it("If both objects matched, returns true", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("If both objects not matched, returns false", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("If both objects not matched, returns false", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it("Has an array returns false", () => {
    assert.strictEqual(eqObjects({ a: { z: [1, 2] }, b: 2 }, { a: { z: [1, 2] }, b: 2 }), false);
  });
  it("Has an array returns false", () => {
    assert.strictEqual(eqObjects({ a: { z: [4, 2] }, b: 2 }, { a: { z: [1, 2] }, b: 2 }), false);
  });
  it("If both objects matched, returns true", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
});