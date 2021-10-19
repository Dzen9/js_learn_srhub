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
  time = 0;
  for (const array of functions.entries()) {
    time += timeouts[array[0]];
    setTimeout(array[1], time);
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

//===============================================================================================
// https://www.youtube.com/watch?v=pwftU5vjMY0&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=4
// flow (CSX Recursion Unit)
function flow(input, funcArray) {
  for (const func of funcArray) {
    input = func(input);
  }

  return input;
}

function multiplyBy2(num) {
  return num * 2;
}

function add7(num) {
  return num + 7;
}

function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}

const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];

console.log(flow(2, arrayOfFunctions));

//===============================================================================================
//https://www.youtube.com/watch?v=gaAcOR5yWxw&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=5
//For Loops And Arrays (CSX Precourse Unit)

const synonyms = ["fantastic", "wonderful", "great"];
const greetings = [];

for (const syn of synonyms) {
  greetings.push(`Have a ${syn} day!`);
}

console.log(greetings);
//===============================================================================================
// https://www.youtube.com/watch?v=f2tYPU-0qV4&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=6
// disemvowel (CSX Functions and Execution Context Unit)

function disemvovel(string) {
  return string.replace(/[eyuioa]/gi, "");
}

console.log(disemvovel("CodeSmith"));
console.log(disemvovel("BANANA"));
console.log(disemvovel("hello world"));
//===============================================================================================
// https://www.youtube.com/watch?v=Mc6zn8fkHXc&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=7
//PersonConstructor (CSX OOP Unit)

function PersonConstructor() {
  this.greet = () => {
    console.log("hello");
  };
}

const simon = new PersonConstructor();
simon.greet();

//===============================================================================================
// https://www.youtube.com/watch?v=0YEabRrrpEk&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=8
// createFunctionWithInput (CSX Closures Unit)
function createFunctionWithInput(example) {
  return () => {
    console.log(example);
  };
}

const sampleFunc = createFunctionWithInput("sample");
const helloFunc = createFunctionWithInput("hello");

console.log(sampleFunc());
console.log(helloFunc());

//===============================================================================================
//https://www.youtube.com/watch?v=Sn0bbIU6DvI&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=9
//createFunction (CSX Closures Unit)
function createFunction() {
  return () => {
    console.log("hello world");
  };
}

let myFunction = createFunction();

console.log(myFunction());
//===============================================================================================
// https://www.youtube.com/watch?v=4u0lHYkhVoU&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=12
// cycleIterator (CSX Closures Unit)

function cycleIterator(array) {
  let index = 0;

  return function () {
    const result = array[index++];
    if (index >= array.length) index = 0;

    return result;
  };
}

const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());

//===============================================================================================
//https://www.youtube.com/watch?v=J7n9O8j4rUY&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=14
//fizzbuzz (CSX Precourse Unit)

let fb = [];

for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 3 === 0) {
    fb.push("fizz");
  } else if (i % 5 === 0) {
    fb.push("fizz");
  } else {
    fb.push(i);
  }
}

console.log(fb);

//===============================================================================================
//https://www.youtube.com/watch?v=PhbNDieKAOk&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=15
// map (CSX Callbacks and Higher Order Functions Unit)

function substractTwo(num) {
  return num - 2;
}

function map(array, callback) {
  array.forEach((value, index, change) => {
    change[index] = substractTwo(value);
  });

  return array;
}

console.log(map([3, 4, 5]));

//===============================================================================================
// https://www.youtube.com/watch?v=OO_hGJWb05M&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=17
// personFromPersonStore (CSX OOP Unit)


const personStore = {
  greet: function () {
    console.log("hello");
  },
};

function personFromPersonStore(name, age) {
  newObject = Object.create(personStore);
  newObject.name = name;
  newObject.age = age;
  return newObject;
}

const sandra = personFromPersonStore("Sandra", 27);
console.log(sandra);
console.log(sandra.greet());

//===============================================================================================
// https://www.youtube.com/watch?v=cyjaWV_H-78&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=20
// censor (Closure, Scope and Execution Context Unit)

function censor() {
  const cache = {};
  return function (stringOne, stringTwo) {
    if (stringTwo) {
      cache[stringOne] = stringTwo;
    } else {
      for (const [replace, on] of Object.entries(cache)) {
        stringOne = stringOne.replace(replace, on);
      }
      return stringOne;
    }
  };
}

const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs."));

//===============================================================================================
// https://www.youtube.com/watch?v=thmw-aEuQe0&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=21
//after (Closure, Scope & Execution Context Unit)
function after(numOfCalls, callback) {
  let counter = 0;

  return function (...args) {
    counter++;
    if (counter >= numOfCalls) {
      return callback(...args);
    }
  };
}

const called = function (string) {
  return `hello ${string}`;
};

const afterCalled = after(3, called);

console.log(afterCalled("world"));
console.log(afterCalled("world"));
console.log(afterCalled("world"));

//===============================================================================================
//https://www.youtube.com/watch?v=CJXQ2tYHDf0&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=22
//multiMap (CSX Callbacks and Higher Order Functions Unit)

function multiMap(items, functions) {
  obj = {};

  items.forEach((element) => {
    let array = [];
    functions.forEach((func) => {
      array.push(func(element));
    });

    obj[element] = array;
  });

  return obj;
}

function uppercaser(str) {
  return str.toUpperCase();
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function repeater(str) {
  return str + str;
}

const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions));

//===============================================================================================
// https://www.youtube.com/watch?v=ww3yb3qNPyM&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=23
// saveOutput (CSX Closure, Scope & Execution Context Unit)

function saveOutput(func, password) {
  const cache = {};

  return function (arg) {
    if (arg === password) {
      return cache;
    } else {
      cache[String(arg)] = func(arg);
    }
  };
}

const multiplyBy2 = function (num) {
  return num * 2;
};
const multiply2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multiply2AndLog(2));
console.log(multiply2AndLog(9));
console.log(multiply2AndLog("boo"));


//===============================================================================================
// https://www.youtube.com/watch?v=TqcSDa-Blf0&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=24
//intersection (CSX Callbacks & Higher-order Functions Unit)
const arr1 = [5, 10, 15, 20, 5];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3]));

function intersection(arrays) {
  arrays.forEach((value, index, arr) => {
    arr[index] = [...new Set(arr[index])];
  });
  let allData = arrays.flat().sort();
  // console.log(allData);
  let repeatData = [];
  for (let i = 0; i < allData.length - 1; i++) {
    if (
      allData[i] === allData[i + 1] &&
      i + 2 <= allData.length - 1 &&
      allData[i + 1] === allData[i + 2]
    ) {
      repeatData.push(allData[i]);
    }
  }

  return [...new Set(repeatData)];
}
//===============================================================================================
// https://www.youtube.com/watch?v=xjvizrVY3Qs&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=25
// forEach (CSX Callbacks & Higher-order Functions Unit)

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function map(array, call) {
  let result = [];
  forEach(array, function (element) {
    result.push(call(element));
  });

  return result;
}

alphabet = "";

forEach(["a", "b", "c"], (x) => {
  alphabet += x;
});

console.log(alphabet);
//===============================================================================================
// https://www.youtube.com/watch?v=AHAcaJUG_Qo&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=26
// union (CSX Callbacks & Higher Order Functions Unit)

const arr1 = [5, 10, 15, 20, 5];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

function union(array) {
  return [...new Set(array.flat())];
}

function unionFromReduce(array) {
  return array.reduce((resultat, currentArray) => {
    currentArray.forEach((value) => {
      if (!resultat.includes(value)) {
        resultat.push(value);
      }
    });
    return resultat;
  }, []);
}

console.log(union([arr1, arr2, arr3]));
console.log(unionFromReduce([arr1, arr2, arr3]));

//===============================================================================================
// https://www.youtube.com/watch?v=ASmSIU-A2wc&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=28
// forEach (Asynchronous JavaScript Unit)
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

const delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
  setTimeout(() => console.log(`printing element ${i}`), delayTime);
}

forEach(delays, delayLog);

//===============================================================================================
// https://www.youtube.com/watch?v=5AzgSa6olDo&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=29
// groupBy (Callbacks & Higher Order Functions Unit)
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};

console.log(groupBy(decimals, floored));

function groupBy(array, callback) {
  let resultArray = [];
  let result = {};

  for (const value of array) {
    let valueResult = callback(value);
    if (result[valueResult] === undefined) {
      result[valueResult] = [];
    }
    result[valueResult].push(value);
  }

  console.log(result);
}

//===============================================================================================
// https://www.youtube.com/watch?v=euRZldF1o3U&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=31
// dateStamp (Closure, Scope & Execution Context Unit)

function dateStamp(func) {
  return function (...args) {
    return { date: new Date().toDateString(), output: func(...args) };
  };
}

const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4));
console.log(stampedMultBy2(6));

//===============================================================================================
// https://www.youtube.com/watch?v=euRZldF1o3U&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=31
// objOfMatches (Callbacks & Higher Order Functions Unit)
function objMatches(arr1, arr2, callback) {
  obj = {};
  arr1.forEach((element, i) => {
    resultText = callback(element);
    if (resultText === arr2[i]) {
      obj[element] = arr2[i];
    }
  });

  return obj;
}

const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];

function uppercaser(str) {
  return str.toUpperCase();
}

console.log(objMatches(arr1, arr2, uppercaser));

//===============================================================================================
// https://www.youtube.com/watch?v=SoFJPtHJi8w&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=32
// Short-Circuiting a Loop (Functions and Execution Context Unit)
function holidays(array) {
  let wasOctober = false;
  array.forEach((element) => {
    if (element === "October") {
      wasOctober = true;
    }
  });
  if (!wasOctober) {
    return "Have a great day!";
  } else {
    return "Happy Halloween";
  }
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];

console.log(holidays(months));
console.log(holidays(animals));

//===============================================================================================
// https://www.youtube.com/watch?v=A4mSdIyM8PY&list=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV&index=33
// multiplyAll (Functions and Execution Context Unit)
function multiplyAll(...args) {
  let result = 1;
  args.forEach((element) => {
    result *= element;
  });

  return result;
}

console.log(multiplyAll(1, 34, 2, 2, 1, 2, 23, 4));
console.log(multiplyAll(4, 3, 3));
