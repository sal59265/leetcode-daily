/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let open = answer[answer.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      answer.push(s[i]);
    } else if (
      (open === '(' && s[i] === ')') ||
      (open === '{' && s[i] === '}') ||
      (open === '[' && s[i] === ']')
    ) {
      answer.pop();
    } else return false;
  }
  return answer.length === 0;
};
