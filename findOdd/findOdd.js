//PREP
// P: Array of nums
// R: The number that occurs a odd number of times
// E:

// P: Array, All nums, whole, +/-
// R: Return, Num
function countOccurance(arr, x) {
  let count = 0;
  for (const num of arr) {
    if (num == x) {
      count++;
    }
  }
  return count;
}

function findOdd(A) {
  // Loop
  let unique = [...new Set(A)];
  for (const num of unique) {
    const count = countOccurance(A, num);
    if (count % 2 > 0) {
      return num;
    }
  }
}

const array = [1, 2, 5, 5, 10];

findOdd([1, 1, 2, 2, 4, 4, 4]); // Return 4
findOdd([0]); // Return 0
findOdd([0, 1, 0, 1, 0]); // Return 0

module.exports = findOdd;
