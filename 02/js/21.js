function findLongestWord(string) {
  // Change code below this line
  const words = string.split(" ");
  let longestWordLength = 0;
  let longestWord;
  for (word of words) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;

  //   return longestWord;
  // Change code above this line
}

console.log(findLongestWord("Hello world"));
