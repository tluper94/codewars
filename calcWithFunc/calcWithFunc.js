function zero(op) {
  if (op) return op(0);

  return 0;
}
function one(op) {
  if (op) return op(1);

  return 1;
}
function two(op) {
  if (op) return op(2);

  return 2;
}
function three(op) {
  if (op) return op(3);

  return 3;
}
function four(op) {
  if (op) return op(4);

  return 4;
}
function five(op) {
  if (op) return op(5);

  return 5;
}
function six(op) {
  if (op) return op(6);

  return 6;
}
function seven(op) {
  if (op) return op(7);

  return 7;
}
function eight(op) {
  if (op) return op(8);

  return 8;
}
function nine(op) {
  if (op) return op(9);

  return 9;
}

function plus(a) {
  return (b) => b + a;
}
function minus(a) {
  return (b) => b - a;
}
function times(a) {
  return (b) => b * a;
}
function dividedBy(a) {
  return (b) => Math.floor(b / a);
}

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
