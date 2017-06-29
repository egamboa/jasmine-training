let stringUtil = {};

stringUtil.firstWord = function(text) {
  return text.split(" ")[0];
}

stringUtil.nthWord = function(text, i) {
  return text.split(" ")[i - 1];
}

module.exports = stringUtil;