const wordsFromString = function(str) {
  let reg = /[^\w\s]/gi;
  return str.replace(reg, "");
}

module.exports = wordsFromString;
