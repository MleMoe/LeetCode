/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param matrix
 * @param target
 * @returns
 */
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const rowNum = matrix.length;
  const colNum = matrix[0]?.length;
  let i = 0,
    j = colNum - 1;
  while (i < rowNum && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

import { testFunction } from '../../utils';
const testcases = [
  [
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ],
  [
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ],
];
const expectedReults = [true, false];
testFunction(findNumberIn2DArray, testcases, expectedReults);
