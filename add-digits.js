let addDigits = function (num) {
  let quotient = num;
  let remainder = 0;
  let sum = 0;

  while (quotient >= 10) {
    remainder = quotient % 10;
    sum = sum + remainder;
    quotient = parseInt(quotient / 10);
  }
  sum = sum + quotient;
  if (sum >= 10) {
    return addDigits(sum);
  } else {
    return sum;
  }
};
