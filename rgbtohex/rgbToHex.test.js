const rgb = require('./rgbToHex');

describe('tests', () => {
  test('should return 000000', () => {
    expect(rgb(0, 0, 0)).toBe('000000');
  });

  test('should return 000000', () => {
    expect(rgb(0, 0, -20)).toBe('000000');
  });

  test('should return FFFFFF', () => {
    expect(rgb(300, 255, 255)).toBe('FFFFFF');
  });

  test('should return ADFF2F', () => {
    expect(rgb(173, 255, 47)).toBe('ADFF2F');
  });
});
