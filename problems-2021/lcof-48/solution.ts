function lengthOfLongestSubstring(s: string): number {
  let max = 0
  Array.from(s).reduce((pre, el) => {
    if (pre.includes(el)) {
      pre = pre.substring(pre.indexOf(el) + 1)
    }
    pre += el

    if (pre.length > max) {
      max = pre.length
    }
    return pre
  }, '')
  return max
}

import { testFunction } from '../../utils'
const testCases = [['abcabcbb'], ['pwwkew'], ['bbbbbbb']]
const expectedResults = [3, 3, 1]
testFunction(lengthOfLongestSubstring, testCases, expectedResults)
