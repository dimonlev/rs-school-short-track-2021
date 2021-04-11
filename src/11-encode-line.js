/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = [];
  let str2 = '';
  if (str === '') {
    result = [];
  }
  let current = str[0];
  // console.log(current);
  for (let i = 1; i < str.length + 1; i++) {
    const item = str[i];
    // console.log(item)
    if (current === item) {
      current = item;
      count++;
    } else if (count === 1) {
      // console.log(item);
      result.push(current);
      // console.log(result);
      count = 1;
      current = item;
    } else {
      // console.log(item);
      result.push(`${count}${current}`);
      // console.log(result);
      count = 1;
      current = item;
      // }
      // }
    }
  }
  str2 = result.join('');
  return str2;
}

module.exports = encodeLine;
