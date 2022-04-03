/**
 * 遍历+模拟，使用 numRows 大小的字符串数组辅助，确定行 index（分 -1/1 方向） 加入新字符。
 * 特殊输入：numRows = 1，为原字符串
 * @param s
 * @param numRows
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }
  const charList = new Array(numRows).fill('')
  let flag = 1,
    pos = 0
  for (let i = 0; i < s.length; i++) {
    charList[pos] += s[i]

    if ((i / (numRows - 1)) % 2 === 0) {
      flag = 1
    }

    if ((i / (numRows - 1)) % 2 === 1) {
      flag = -1
    }
    pos += flag
  }
  return charList.join('')
}

import { testFunction } from '../../utils'
const testCases = [
  ['PAYPALISHIRING', 3],
  ['PAYPALISHIRING', 4],
  ['AB', 1],
]
const expectedResults = ['PAHNAPLSIIGYIR', 'PINALSIGYAHRPI', 'AB']
testFunction(convert, testCases, expectedResults)
