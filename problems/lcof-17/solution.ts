function printNumbers(n: number): number[] {
  return [...Array(Math.pow(10, n) - 1)].map((x, i) => i + 1)
}

import { testFunction } from '../../utils'
const testCases = [[1]]
const expectedResults = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
testFunction(printNumbers, testCases, expectedResults)
