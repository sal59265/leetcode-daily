// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function (x) {
  let reversed = '';
  let xStr = x.toString();
  for (let i of xStr) {
    reversed = i + reversed;
  }
  return reversed === xStr;
};
