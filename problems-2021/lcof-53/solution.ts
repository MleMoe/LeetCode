function search(nums: number[], target: number): number {
  return nums.indexOf(target) > -1
    ? nums.lastIndexOf(target) - nums.indexOf(target) + 1
    : 0
}

import { testFunction } from '../../utils'
const testCases = [[[5, 7, 7, 8, 8, 10], 8]]
const expectedResults = [2]
testFunction(search, testCases, expectedResults)
