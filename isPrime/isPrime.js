function isPrime(num) {
  if (num <= 1) return false;

  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) {
      return false;
    }

    i += 1;
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(61));
console.log(isPrime(-1));
