/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = Math.round(x / 2);
  while (left !== right) {
    let middle = Math.floor((left + right) / 2);
    let middleTwo = middle * middle;
    if (middleTwo === x) {
      return middle;
    } else if (middleTwo > x) {
      right = middle;
    } else if (left === middle) {
      break;
    } else {
      left = middle;
    }
  }
  return right * right === x ? right : right === 1 ? 1 : right - 1;
};
