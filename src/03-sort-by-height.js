/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = [];
  const minusArr = [];
  let positiveArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusArr.push(i);
    } else {
      positiveArr.push(arr[i]);
    }
  }
  positiveArr = positiveArr.sort((a, b) => (a - b));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      resultArr.push(positiveArr[index]);
      index++;
    } else {
      resultArr.push(-1);
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
