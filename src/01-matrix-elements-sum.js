//   Given matrix, a rectangular matrix of integers,
//   just add up all the values that don't appear below a "0".
//  @param {Array<Array>} matrix
//  @return {Number}
//   @example
// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];
//   The result should be 9
function getMatrixElementsSum(matrix) {
  function isZeroAbove(str, ind, matrix2) {
    let result = true;
    for (let i = str - 1; i > 0; i--) {
      if (matrix2[i][ind] === 0) {
        result = false;
      }
    }
    return result;
  }
  let sum = 0;
  if (matrix[0] === 0) {
    sum = 0;
  } else {
    for (let i = matrix.length - 1; i >= 0; i--) {
      for (let k = 0; k < matrix[i].length; k++) {
        if (isZeroAbove(i, k, matrix)) {
          sum += matrix[i][k];
        }
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
