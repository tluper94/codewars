function partsSums(ls) {
  let sum = ls.reduce((prev, curr) => prev + curr, 0);
  const sumOfpairs = ls.map((n) => (sum = sum - n));
  console.log(sumOfpairs);
  return sumOfpairs;
}

partsSums([167657, 62912, 51456, 646484, 88894]);
