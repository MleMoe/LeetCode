/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * @param nums
 * @returns
 */
function exchange(nums: number[]): number[] {
  let i = 0,
    j = nums.length - 1
  while (i < j) {
    while (nums[i] % 2 == 1) {
      i++
    }
    while (nums[j] % 2 == 0) {
      j--
    }
    if (i < j) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  return nums
}

import { testFunction } from '../../utils'
const testCases = [[[1, 2, 3, 4]], [[1, 3, 5]]]
const expectedResults = [
  [1, 3, 2, 4],
  [1, 3, 5],
]
testFunction(exchange, testCases, expectedResults)
