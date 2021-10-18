//https://www.youtube.com/watch?v=pG1JCk4G0W8&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=1
//arrayBuilder (CSX Functions and Execution Context Unit)
function arrayBuilder(object) {
  // let elements = Object.values(obj);
  // let keys = Object.keys(obj);
  let array = [];
  for (const key in object) {
    for (let i = 0; i < object[key]; i++) {
      array.push(key);
    }
  }

  return array;
}

obj = {
  cats: 2,
  dogs: 1,
};

console.log(arrayBuilder(obj));
//===============================================================================================

// https://www.youtube.com/watch?v=ELX-FBXZ-3g&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=2
// Reduce (CSX Callbacks and Higher Order Functions Unit)
var nums = [4, 1, 3];
var add = (a, b) => {
  return a + b;
};

function reduce(array, func, beginValue = 0) {
  for (const value of array) {
    beginValue = func(beginValue, value);
  }

  return beginValue;
}

console.log(reduce(nums, add, 0));

//===============================================================================================
//https://www.youtube.com/watch?v=micF_oeeeko&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=3
//runInOrder (CSX Async Unit)
function runInOrder(functions, timeouts) {
  for (const array of functions.entries()) {
    setTimeout(array[1], timeouts[array[0]]);
  }
}

function sayHi() {
  console.log("hi");
}

function sayBye() {
  console.log("bye");
}

function sayHowdy() {
  console.log("howdy");
}

fnc = [sayHi, sayBye, sayHowdy];
tm = [300, 600, 200];

runInOrder(fnc, tm);
