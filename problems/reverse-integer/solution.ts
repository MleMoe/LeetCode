/**
 * 尾数遍历时乘以10再相加，注意符号位，时间 O(n)，空间 O(1)
 * @param x
 * @returns
 */
function reverse(x: number): number {
  let symbol = 1
  if (x < 0) {
    x = -x
    symbol = -1
  }
  let num
  let result = 0
  while (x > 0) {
    num = x % 10
    x = Math.floor(x / 10)
    result = result * 10 + num
  }
  result = result >= 2 ** 31 - 1 ? 0 : result
  return result * symbol
}

import { testFunction } from '../../utils'
const testCases = [[-123], [10200]]
const expectedResults = [-321, 201]
testFunction(reverse, testCases, expectedResults)
