/**
 * 正则表达式 match 方法，使用 /g
 * @param s
 * @returns
 */
function myAtoi(s: string): number {
  s = s.trim()
  const matches = s.match(/^[-+]?[\d]+/g)
  if (!matches?.length) {
    return 0
  }
  let result = parseInt(matches[0])
  result = result < -Math.pow(2, 31) ? -Math.pow(2, 31) : result
  result = result > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : result

  return result
}

import { testFunction } from '../../utils'
const testCases = [
  ['+4193.2 with words'],
  ['  0000000000012345678'],
  ['-000000000000001'],
  ['words and 987'],
]
const expectedResults = [4193, 12345678, -1, 0]
testFunction(myAtoi, testCases, expectedResults)
