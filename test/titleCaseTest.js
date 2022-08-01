const titleCase = require('../titleCase');
const assert = require('chai').assert;

describe("The titleCase function", () => {
  it("capitalizes the first character of a given word", () => {
    assert.strictEqual(titleCase("test"), "Test");
  });
  it("capitalizes the first character of every word in a sentence", () => {
    assert.strictEqual(titleCase("this is an example"), "This Is An Example");
  });
  it("capitalizes the first character of every word in a sentence, even if a word has a single char", () => {
    assert.strictEqual(titleCase("i r cool"), "I R Cool");
  });
  it("capitalizes only the first character of every word in a sentence, and returns the rest of the word in lowercases, if the original given string is fully capitalized", () => {
    assert.strictEqual(titleCase("WHAT HAPPENS HERE"), "What Happens Here");
  });
  it("returns an empty string, if given an empty string", () => {
    assert.strictEqual(titleCase(""), "");
  });
  it("returns a single capitalized letter, if given a single capitalized letter", () => {
    assert.strictEqual(titleCase("A"), "A");
  });
  it("returns a single capitalized letter, if given a single lowercase letter", () => {
    assert.strictEqual(titleCase("a"), "A");
  });
});
