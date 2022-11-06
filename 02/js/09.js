function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  const newArray = [firstElement, lastElement];

  return newArray;

  // Change code above this line
}

const array1 = ["foo", "bar", "baz"];

console.log(getExtremeElements(array1));
