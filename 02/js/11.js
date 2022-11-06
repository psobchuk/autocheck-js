function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const words = message.split(" ");
  const wordsLength = words.length;
  const totalCost = pricePerWord * wordsLength;
  return totalCost;
  // Change code above this line
}

console.log(calculateEngravingPrice("Hello, world", 1));
