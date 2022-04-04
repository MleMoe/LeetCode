/**
 * 哈希，模拟遍历
 * @param s
 * @returns
 */
function romanToInt(s: string): number {
  const roman2Int = new Map<string, number>()
  roman2Int
    .set('M', 1000)
    .set('CM', 900)
    .set('D', 500)
    .set('CD', 400)
    .set('C', 100)
    .set('XC', 90)
    .set('L', 50)
    .set('XL', 40)
    .set('X', 10)
    .set('IX', 9)
    .set('V', 5)
    .set('IV', 4)
    .set('I', 1)

  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (roman2Int.has(s[i] + (s[i + 1] ?? 0))) {
      res += roman2Int.get(s[i] + (s[i + 1] ?? 0))
      i++
    } else {
      res += roman2Int.get(s[i])
    }
  }

  return res
}

import { testFunction } from '../../utils'
const testCases = [['LVIII'], ['MCMXCIV']]
const expectedResults = [58, 1994]
testFunction(romanToInt, testCases, expectedResults)
