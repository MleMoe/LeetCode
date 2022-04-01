/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * @param board 
 * @param word 
 */
function exist(board: string[][], word: string): boolean {
  const rowNum = board.length;
  const colNum = board[0]?.length;
  const dfs = (i, j, p) => {
    if (
      i < 0 ||
      i >= rowNum ||
      j < 0 ||
      j >= colNum ||
      word[p] !== board[i][j]
    ) {
      return false;
    }
    if (p === word.length - 1) {
      return true;
    }
    // 表示已经搜索过
    board[i][j] = '';
    const result =
      dfs(i + 1, j, p + 1) ||
      dfs(i - 1, j, p + 1) ||
      dfs(i, j + 1, p + 1) ||
      dfs(i, j - 1, p + 1);
    // 复原
    board[i][j] = word[p];
    return result;
  };
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

import { testFunction } from '../../utils';
const testCases = [
  [
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
  ],
  [
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
    'abcd',
  ],
];
const expectedResults = [true, false];
testFunction(exist, testCases, expectedResults);
