/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var out = '';
  var aEnd = a.length - 1;
  var bEnd = b.length - 1;

  var carry = '0';

  while (aEnd != -1 && bEnd != -1) {
    out = '' + (a[aEnd] ^ b[bEnd] ^ carry) + out;
    carry = '' + (a[aEnd] & b[bEnd] || a[aEnd] & carry || b[bEnd] & carry);
    aEnd--;
    bEnd--;
  }
  if (aEnd != -1) {
    while (aEnd != -1) {
      out = '' + (a[aEnd] ^ carry) + out;
      carry = a[aEnd] & carry;
      aEnd--;
    }
  }
  if (bEnd != -1) {
    while (bEnd != -1) {
      out = '' + (b[bEnd] ^ carry) + out;
      carry = b[bEnd] & carry;
      bEnd--;
    }
  }
  if (aEnd == -1 && bEnd == -1 && carry == 1) out = '1' + out;
  return out;
};
