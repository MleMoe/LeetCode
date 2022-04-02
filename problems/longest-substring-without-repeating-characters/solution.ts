/**
 * 滑动窗口（双指针），注意左指针的移动位置为 left+index+1
 * @param s
 * @returns
 */
function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0
  }
  let left = 0,
    max = 1,
    index
  for (let i = 1; i < s.length; i++) {
    index = s.slice(left, i).indexOf(s[i])
    if (index !== -1) {
      left = left + index + 1
    }
    max = i - left + 1 > max ? i - left + 1 : max
  }
  return max
}

import { testFunction } from '../../utils'
const testCases = [['abcabcbb'], ['bbbbb'], ['pwwkew'], ['dvdf']]
const expectedResults = [3, 1, 3, 3]
testFunction(lengthOfLongestSubstring, testCases, expectedResults)
