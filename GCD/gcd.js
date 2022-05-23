function gcd(a, b) {
  while (b !== 0) {
    while (a <= b) {
      b = b - a;
    }
    a = a - b;
  }

  return a;
}

const greatest = gcd(56, 72);

console.log(greatest);
