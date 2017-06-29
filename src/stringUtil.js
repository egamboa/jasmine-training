let stringUtil = {};

stringUtil.firstWord = function(text) {
  let textWords = text.split(" ");
  return textWords[0];
}

module.exports = stringUtil;