/**
 * 使用队列，时间 O(3**n * 4**m)
 * @param digits
 * @returns
 */
function letterCombinations(digits: string): string[] {
  const numStrMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  if (digits == '') return []
  let ans = ['']
  for (const k of digits) {
    const ansB = []
    for (const char of numStrMap[k]) {
      for (const pre of ans) {
        ansB.push(pre + char)
      }
    }
    ans = ansB
  }

  return ans
}

import { testFunction } from '../../utils'
const testCases = [[''], ['2'], ['23']]
const expectedResults = [
  [],
  ['a', 'b', 'c'],
  ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
]
testFunction(letterCombinations, testCases, expectedResults)
