function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()
  numMap.set(target - nums[0], 0)

  for (let i = 1; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      return [numMap.get(nums[i]), i]
    }
    numMap.set(target - nums[i], i)
  }
}

import { testFunction } from '../../utils'
const testCases = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
]
const expectedResults = [
  [0, 1],
  [1, 2],
]
testFunction(twoSum, testCases, expectedResults)
