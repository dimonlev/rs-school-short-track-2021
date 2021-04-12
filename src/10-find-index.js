/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let result = null;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) {
      result = middle;
      break;
    } else if (arr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return result;
}

module.exports = findIndex;
