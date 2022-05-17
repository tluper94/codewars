//PREP

// P: Array, Numbers, Whole, +/-
// R: String, Range Format that spans at least 3 nums,

function solution(list) {
  // Reduce over the array
  let length = 1;

  const array = [];

  for (let i = 1; i <= list.length; i++) {
    // Conditional if current - prev = 1  store prev
    if (i === list.length || list[i] - list[i - 1] !== 1) {
      if (length < 3) {
        array.push(list[i - length].toString());
      } else if (length >= 3 && list[i] - list[i - 1] !== 1) {
        array.push(list[i - length] + '-' + list[i - 1]);
      }
      length = 1;
    } else if (list[i + 1] - list[i] !== 1 && length == 1) {
      array.push(list[i - length].toString());
    } else {
      length++;
    }
  }

  return array.join(',');
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
// solution([-10, -9, -8, -7, -3, -1, 0, 1, 2]); // "-10--7, -3, -1-2"
// solution([5, 6, 7, 10, 12, 14, 15, 18, 19, 20]); // "5-7, 10, 12, 14, 15, 18-20"
