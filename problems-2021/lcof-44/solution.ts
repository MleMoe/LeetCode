function findNthDigit(n: number): number {
  // 0, 9*1, 9*10*2, 9*100*3, 9*1000*4
  if (n < 10) {
    return n
  }
  n = n - 1
  let digit = 1,
    count = 9
  while (n > count) {
    n -= count
    digit += 1
    count = 9 * 10 ** (digit - 1) * digit
  }
  const num = 10 ** (digit - 1) + Math.floor(n / digit)
  return parseInt(num.toString()[n % digit])
}

import { testFunction } from '../../utils'
const testCases = [[100]]
const expectedResults = [5]
testFunction(findNthDigit, testCases, expectedResults)
