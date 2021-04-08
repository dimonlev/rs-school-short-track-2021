/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let min;
  let max;
  let count = 0;
  if (s1 > s2) {
    min = s2;
    max = s1;
  }
  max = s2;
  min = s1;
  // console.log(min);
  // console.log(max);
  for (let i = 0; i < min.length; i++) {
    // console.log(min[i]);
    if (max.includes(min[i])) {
      // console.log(min[i]);
      count++;
      max = max.replace(min[i], '');
      // console.log(max);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
