// PREP

// P: String, no other characters except 0-9
// R: String, sum of the to strings

function sumStrings(a, b) {
  let top;
  let bottom;
  let result = '';

  if (a.length > b.length || a.length === b.length) {
    top = a;
    bottom = b;
  } else {
    top = b;
    bottom = a;
  }

  let n1 = top.length,
    n2 = bottom.length;
  let diff = n1 - n2;

  let carry = 0;

  for (let i = n2 - 1; i >= 0; i--) {
    let sum =
      bottom.charCodeAt(i) - 48 + (top.charCodeAt(i + diff) - 48) + carry;
    result += sum % 10;
    carry = Math.floor(sum / 10);
    // console.log(Math.floor(sum / 10));
  }

  for (let i = n1 - n2 - 1; i >= 0; i--) {
    let sum = top.charCodeAt(i) - 48 + carry;
    result += sum % 10;
    carry = Math.floor(sum / 10);
    // console.log(Math.floor(sum / 10));
  }

  if (carry) {
    result += carry;
  }

  result = result.split('').reverse().join('');

  let start;

  if (result[0] === '0') {
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== '0') {
        start = i;
        break;
      }
    }
  }

  if (start) {
    result = result.substring(start, result.length);
  }

  return result;
}

// Examples
console.log(
  sumStrings(
    '052445454646445454687845456',
    '000005915465454546464454654654646463'
  )
); // R: "30"
sumStrings('5', '25'); // R: "30"
