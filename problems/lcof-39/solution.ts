function majorityElement(nums: number[]): number {
  nums.sort()
  for (const num of nums) {
    if (nums.lastIndexOf(num) - nums.indexOf(num) + 1 > nums.length / 2) {
      return num
    }
  }
}

import { testFunction } from '../../utils'
const testCases = [[[1, 2, 3, 2, 2, 2, 5, 4, 2]]]
const expectedResults = [2]
testFunction(majorityElement, testCases, expectedResults)
