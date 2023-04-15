const letterPositions = function(sentence) {
  const results = {}; // Declare object
  for (let i = 0; i < sentence.length; i++) { // Traditional loop to determine the index of each letter for of will not work on duplicated value
    const letter = sentence[i]; // Each letter into string
    if (letter !== " ") { // If it is not a empty space
      if (results[letter] === undefined) { // If the letter doesn't exist in the object key
        results[letter] = [i]; // Add key as array
      } else {
        results[letter].push(i); // If not push a value into the array
      }
    }
  }
  
  return results;
};

module.exports = letterPositions;