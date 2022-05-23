function partsSums(ls) {
  let sum = ls.reduce((prev, curr) => prev + curr, 0);

  const res = [sum];

  for (let i = 1; i <= ls.length; i++) {
    sum -= ls[i - 1];
    res.push(sum);
  }

  return res;
}

partsSums([1, 2, 3, 4, 5, 6]);
