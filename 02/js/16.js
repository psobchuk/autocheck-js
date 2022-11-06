function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  const newArrayLength = newArray.length;

  if (newArrayLength > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;

  // Change code above this line
}

const array1 = ["foo", "bar", "baz"];
const array2 = ["spam", "and", "eggs"];

console.log(makeArray(array1, array2, 4));
