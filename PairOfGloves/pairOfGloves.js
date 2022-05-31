function numberOfPairs(gloves) {
  function numOfPairs(glove) {
    const number = gloves.filter((pairs) => pairs === glove).length;
    if (number >= 2) return Math.floor(number / 2);
    return 0;
  }

  const pairs = [...new Set(gloves)]
    .map((glove) => numOfPairs(glove))
    .reduce((prev, curr) => prev + curr);

  return pairs;
}

numberOfPairs(['red', 'green', 'blue']);
