function isEven(num) {
  return num % 2 === 0;
}

function takeWhile(arr, pred) {
  const predArr = [];
  for (const value of arr) {
    if (pred(value)) {
      predArr.push(value);
    } else {
      break;
    }
  }
  return predArr;
}

takeWhile([2, 4, 6, 9, 10], isEven);
