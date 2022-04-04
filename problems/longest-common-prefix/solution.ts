/**
 * 遍历比较，时间 O(m*n)
 * @param strs
 * @returns
 */
function longestCommonPrefix(strs: string[]): string {
  const getPrefix = (a: string, b: string) => {
    let prefix = ''
    let i = 0
    while (i < a.length && i < b.length) {
      if (a[i] === b[i]) {
        prefix += b[i]
      } else {
        return prefix
      }
      i++
    }
    return prefix
  }
  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    res = getPrefix(res, strs[i])
    if (res === '') {
      return res
    }
  }
  return res
}

import { testFunction } from '../../utils'
const testCases = [[['flower', 'flow', 'flight']]]
const expectedResults = ['fl']
testFunction(longestCommonPrefix, testCases, expectedResults)
