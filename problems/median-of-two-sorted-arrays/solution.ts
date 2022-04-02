/**
 * 方法一：从小至大一次遍历两个数组，直至中位，时间 O(m+n)
 * 方法二：二分查找，用 k/2 做处理，其中 k=(m+n)/2，时间 O(log(m+n))
 * @param nums1
 * @param nums2
 * @returns
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let nums = [],
    length = nums1.length + nums2.length
  while (nums.length <= length / 2) {
    if (nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
        nums.push(nums1.shift())
      } else {
        nums.push(nums2.shift())
      }
    } else if (nums1.length) {
      nums.push(nums1.shift())
    } else {
      nums.push(nums2.shift())
    }
  }

  return length % 2
    ? nums.pop()
    : (nums[nums.length - 1] + nums[nums.length - 2]) / 2
}

import { testFunction } from '../../utils'
const testCases = []
const expectedResults = []
testFunction(findMedianSortedArrays, testCases, expectedResults)
