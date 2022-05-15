// PREP
// P: R, G, B numbers between 0 and 255
// R: Should return the hex values as a string

// P: Numbers, Between 0-255, any values outside range get rounded to nearest value inside range

const rgb = (r, g, b) => {
  // Check if values are outside range
  const values = [r, g, b].map((value) => {
    // If outside round to nearest value inside range
    if (value < 0) return '00';
    if (value > 255) return 'FF';

    let hex = value.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  });

  // Return converted values as a string
  return values.join('').toUpperCase();
};

module.exports = rgb;
