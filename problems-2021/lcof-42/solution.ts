function maxSubArray(nums: number[]): number {
  let curSum = nums[0]
  let max = curSum
  nums.slice(1).forEach((num) => {
    curSum = curSum > 0 ? curSum + num : num
    max = curSum > max ? curSum : max
  })
  return max
}

import { testFunction } from '../../utils'
const testCases = [[[-2, 1, -3, 4, -1, 2, 1, -5, 4]]]
const expectedResults = [6]
testFunction(maxSubArray, testCases, expectedResults)
