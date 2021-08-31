// [...string].forEach(value => {
//   index = scobe.close.indexOf(x);
//   if(index !== -1 && scobe.open[index] === arr[])
// });

let string = '([]([]){}([{}]))';
console.log(rightBracketsExist(string));

function rightBracketsExist(string) {
  const scobe = {
    open: ['{', '[', '('],
    close: ['}', ']', ')'],
  };
  let indexClose, indexOpen;
  let arr = [];
  for (const value of string) {
    indexClose = scobe.close.indexOf(value);
    indexOpen = scobe.open.indexOf(value);
    if (indexOpen !== -1) arr.push(value);
    else if (
      indexClose !== -1 &&
      arr.length - 1 >= 0 &&
      scobe.open[indexClose] === arr[arr.length - 1]
    ) {
      arr.pop();
    } else return false;
  }
  if (arr.length > 0) return false;
  return true;
}
