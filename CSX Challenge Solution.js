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


