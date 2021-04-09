/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let count = 0;
  const result = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res = [];
    for (let k = 0; k < arr[i].length; k++) {
      // console.log(arr[i][k]);
      count = 0;

      if (arr[i - 1] !== undefined && arr[i - 1][k - 1] === true) {
        count++;
      }
      if (arr[i - 1] !== undefined && arr[i - 1][k] === true) {
        count++;
      }
      if (arr[i - 1] !== undefined && arr[i - 1][k + 1] === true) {
        count++;
      }
      if (arr[i] !== undefined && arr[i][k - 1] === true) {
        count++;
      }
      if (arr[i] !== undefined && arr[i][k + 1] === true) {
        count++;
      }
      if (arr[i + 1] !== undefined && arr[i + 1][k - 1] === true) {
        count++;
      }
      if (arr[i + 1] !== undefined && arr[i + 1][k] === true) {
        count++;
      }
      if (arr[i + 1] !== undefined && arr[i + 1][k + 1] === true) {
        count++;
      }
      res.push(count);
    }
    result.push(res);
  }
  return result;
}

module.exports = minesweeper;
