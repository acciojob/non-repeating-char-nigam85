function findFirstNonRepeatedCharacter() {
  let input = prompt("Enter a string:");
  let charCount = {};

  // Count the occurrence of each character
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Find the first non-repeated character
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (charCount[char] === 1) {
      alert("First non-repeated character: " + char);
      return;
    }
  }

  // If no non-repeated character found
  alert("No non-repeated character found.");
}

