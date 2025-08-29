module.exports = function reverse(n) {
  const numStr = n.toString();
  const reversedStr = numStr.split('').reverse().join('');
  const reversedNum = parseInt(reversedStr, 10);
  if (n < 0) {
    return reversedNum;
  }
  return reversedNum;
};
