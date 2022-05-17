function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  let min = 0;
  let max = k;

  const array = [];

  while (max <= strarr.length) {
    const filtered = strarr.filter((value, i) => {
      if (i >= min && i <= max - 1) {
        return value;
      }
    });

    filtered.join('');
    array.push(filtered.join(''));

    min++;
    max++;
  }

  return array.reduce((prev, curr) =>
    curr.length > prev.length ? curr : prev
  );
}

module.exports = longestConsec;
