const {
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
} = require('./calcWithFunc');

describe('Tests', () => {
  it('test', () => {
    expect(seven(times(five()))).toBe(35);
    expect(four(plus(nine()))).toBe(13);
    expect(eight(minus(three()))).toBe(5);
    expect(six(dividedBy(two()))).toBe(3);
  });
});
