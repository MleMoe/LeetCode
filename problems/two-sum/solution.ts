/**
 * 两数之和，用 hash 表，以空间换时间。
 * 时间：O(n)，空间：O(n)
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
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
