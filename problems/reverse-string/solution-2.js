/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = s.length
  for (let i = 0; i < l / 2; i++) {
    let temp = s[i];
    s[i] = s[l - i - 1];
    s[l - i - 1] = temp;
  }
};