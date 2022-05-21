function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a && arr[i + 1] == b) {
      return true;
    } else if (arr[i] == b && arr[i + 1] == a) {
      return true;
    }
  }
  return false;
}

console.log(consecutive([1, 2, 3, 5, 2, 5, 3, 5, 7], 3, 2));
