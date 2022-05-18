function generateHashtag(str) {
  if (str.length == 0 || str.trim().length == 0) return false;
  const string = str.split(' ');
  const hashTag =
    '#' +
    string
      .map((word) =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join('');

  if (hashTag.length > 140) return false;

  return hashTag;
}

console.log(generateHashtag(' '.repeat(200)));

module.exports = generateHashtag;
