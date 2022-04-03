/**
 * 贪心，哈希表
 * @param num
 * @returns
 */
function intToRoman(num: number) {
  const i2Roman = new Map<number, string>()
  i2Roman
    .set(1000, 'M')
    .set(900, 'CM')
    .set(500, 'D')
    .set(400, 'CD')
    .set(100, 'C')
    .set(90, 'XC')
    .set(50, 'L')
    .set(40, 'XL')
    .set(10, 'X')
    .set(9, 'IX')
    .set(5, 'V')
    .set(4, 'IV')
    .set(1, 'I')

  let res = ''

  for (const item of i2Roman) {
    if (Math.floor(num / item[0]) !== 0) {
      res += item[1].repeat(Math.floor(num / item[0]))
      num = num % item[0]
    }
  }
  return res
}

import { testFunction } from '../../utils'
const testCases = [[3], [4], [9], [58], [1994]]
const expectedResults = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV']
testFunction(intToRoman, testCases, expectedResults)
