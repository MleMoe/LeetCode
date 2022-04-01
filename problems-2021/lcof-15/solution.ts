function hammingWeight(n: number): number {
  return [...n.toString()].filter((c) => c === '1').length
}

import { testFunction } from '../../utils'
const testCases = [[1011]]
const expectedResults = [3]
testFunction(hammingWeight, testCases, expectedResults)
