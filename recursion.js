// find factorial
function factorial(number) {
  let result = 1;

  function factorialRecursion(num) {
    if (num === 1) {
      return result;
    } else {
      result *= num;
      return factorialRecursion(num - 1);
    }
  }
  return factorialRecursion(number);
}

// console.log(factorial(4));

// find length of array
const arr = [1, 2, 3, 4, 5, 56, 6];

function getLength(array, num = 0) {
  if (array[num] === undefined) {
    return num;
  } else {
    return getLength(array, ++num);
  }
}

console.log(getLength(arr));

// make string from a char with 5 elements
function repeater(char) {
  if (char.length === 5) {
    return char;
  } else {
    char += char[0];
    return repeater(char);
  }
}

console.log(repeater("a"));
