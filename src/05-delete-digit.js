/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let max;
  // let next;
  const str = `${number}`;
  max = +(str.slice(1));
  for (let i = 0; i < str.length; i++) {
    const next = +(str.replace(str[i], ''));
    if (next > max) {
      max = next;
    }
  }
  return max;
}

module.exports = deleteDigit;
