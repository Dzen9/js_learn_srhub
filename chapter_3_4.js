// ===========================================================

/* Minimum
Chapter 2 introduced the standard function Math.min, which returns its smallest argument (see “Return Values” on page 27). We can build something
like that now. Write a function min that takes two arguments and returns
their minimum. */

const getMinimum = (a, b) => (a >= b ? b : a);

console.log(getMinimum(5, 3));

// ===========================================================

/* Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even
or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N − 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.
Test it on 50 and 75. See how it behaves on −1. Why? Can you think of a
way to fix this? */

// ==========================================================

const isEven = (num) => {
  let ret;
  num = Math.abs(num);
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    ret = isEven(num - 2);
  }
  return ret;
};

console.log(isEven(9));
console.log(isEven(10));
console.log(isEven(-1));

// ==========================================================
/* 
Bean Counting
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for
example, "b"). The first character has position 0, which causes the last one
to be found at position string.length - 1. In other words, a two-character
string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters there
are in the string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
 */

const returnUpperB = (string) => string.match(/B/g).length;

console.log(returnUpperB("someBfdfB"));

const countChar = (string, letter) =>
  string.match(new RegExp(letter, "g")).length;

console.log(countChar("asdfasdffa", "a"));

// ==========================================================
/* 
The Sum of a Range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used when building the array.
If no step is given, the elements go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
 */

const range = (start, end, step = 1) => {
  let arr = [];
  for (let index = start; index < end + 1; index += step) {
    arr.push(index);
  }
  return arr;
};

const sum = (numbers) => numbers.reduce((last, now) => last + now, 0);

// ==========================================================
/* 
Reversing an Array
Arrays have a reverse method that changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in the
inverse order. The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in
“Functions and Side Effects” on page 54, which variant do you expect to be
useful in more situations? Which one runs faster?
 */

const reverseArray = (array) => {
  let reverseArray = [];
  for (const value of array) {
    reverseArray.unshift(value);
  }
  return reverseArray;
};

const reverseArrayInPlace = (array, el = 0) => {
  let reverseArray = [];
  for (let index = el; index < array.length; index++) {
    reverseArray.unshift(array[index]);
  }
  reverseArray = [...array.slice(0, el), ...reverseArray];
  return reverseArray;
};

/* 
A List
Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with
array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

A nice thing about lists is that they can share parts of their structure. For
example, if I create two new values {value: 0, rest: list} and {value: -1,
rest: list} (with list referring to the binding defined earlier), they are both
independent lists, but they share the structure that makes up their last three
elements. The original list is also still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend,
which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number
and returns the element at the given position in the list (with zero referring
  to the first element) or undefined when there is no such element.
  If you haven’t already, also write a recursive version of nth. 
  */

let listMain = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

arrayMain = [1, 2, 3];

const arrayToList = (array) => {
  let list = {};
  let ref = null;
  array.forEach((value, index, arr) => {
    if (ref == null) {
      list.rest = {};
      list.value = value;
      ref = list.rest;
    } else {
      if (index !== arr.length - 1) {
        ref.rest = {};
      } else {
        ref.rest = null;
      }
      ref.value = value;
      ref = ref.rest;
    }
  });
  return list;
};

console.log(arrayToList(arrayMain));

const listToArray = (list) => {
  let array = [];
  ref = list;
  while (true) {
    array.push(ref.value);
    ref = ref.rest;
    if (ref === null) {
      break;
    }
  }
  return array;
};

console.log(listToArray(listMain));

// ==========================================================
/* 
Deep Comparison
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.
Write a function deepEqual that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
deepEqual.
To find out whether values should be compared directly (use the ===
operator for that) or have their properties compared, you can use the typeof
operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a
historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the
properties of objects to compare them.

 */

const ob1 = { a: 1, b: true, c: 3, d: 2 },
  ob2 = { a: 1, b: true, c: 3 };

const a = 1,
  b = 2;

const deepEqual = (value1, value2) => {
  if (
    typeof value1 === "object" &&
    typeof value2 === "object" &&
    value1 !== null &&
    value2 !== null
  ) {
    properties1 = Object.keys(value1);
    for (const key of properties1) {
      if (value2[key] !== value1[key]) {
        return false;
      }
    }
    return true;
  } else {
    if (value1 === value2) {
      return true;
    }
  }
  return false;
};

console.log(deepEqual(ob1, ob2));
console.log(deepEqual(a, b));
