function isPalindrome(word) {
  // We loop from the start of the string to the middle.
  // Math.floor() is used to handle strings with an odd number of characters correctly.
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    // 'i' is the index from the beginning.
    const fromBeginning = word[i];
    // 'j' is the corresponding index from the end.
    const fromEnd = word[word.length - 1 - i];

    // If the characters at these two positions do not match,
    // we know it's not a palindrome, so we can exit early.
    if (fromBeginning !== fromEnd) {
      return false;
    }
  }

  // If the loop completes, it means all corresponding characters matched,
  // so the word is a palindrome.
  return true;
}

/* 
  iterate from the beginning of the string to the middle of the string
    compare the letter we're iterating over to the corresponding letter at the end of the string
      if the letters don't match, return false

  if we reach the middle, and all the letters match, return true
*/

/*
  This solution checks if a string is a palindrome by comparing characters from the outside-in.
  It uses a for-loop that iterates from the start of the string (`index 0`) up to the middle.
  In each iteration, it compares the character at the current index from the beginning with the corresponding character from the end.
  If at any point the characters do not match, the function immediately returns `false`, as it's not a palindrome.
  If the loop finishes without finding any mismatches, it means the string is a palindrome, and the function returns `true`.
  This method is efficient because it only needs to loop through half of the string and doesn't create any new strings or arrays, saving memory.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
