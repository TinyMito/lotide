const countLetters = function(letters) {
  const count = {};
  for (const letter of letters) {
    if (letter !== " ") {
      count[letter] = letter in count ? count[letter] + 1 : 1;
    }
  }
  return count;
}

module.exports = countLetters;