/**
 * 升序排列，双指针，O(n*n)
 * @param nums
 * @param target
 * @returns
 */
function threeSumClosest(nums: number[], target: number): number {
  let res = nums[0] + nums[1] + nums[2]
  let tmp = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      tmp = nums[i] + nums[l] + nums[r]
      if (Math.abs(target - tmp) < Math.abs(target - res)) {
        res = tmp
      }
      if (tmp === target) {
        return target
      } else if (tmp < target) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}

import { testFunction } from '../../utils'
const testCases = [
  [[-1, 2, 1, -4], 1],
  [[0, 0, 0], 1],
]
const expectedResults = [2, 0]
testFunction(threeSumClosest, testCases, expectedResults)
