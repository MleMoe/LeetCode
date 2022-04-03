/**
 * 1.两两比较，类冒泡排序，O(n*n)超时
 * 2.双指针，向内移动短板，可能增大，向内移动长板，必不能增大，故可 O(n) 遍历
 * @param height
 * @returns
 */
function maxArea(height: number[]): number {
  // let maxContainer = 0
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     maxContainer = Math.max(
  //       maxContainer,
  //       (j - i) * Math.min(height[i], height[j])
  //     )
  //   }
  // }
  // return maxContainer
  let maxContainer = 0
  let left = 0,
    right = height.length - 1

  while (left < right) {
    maxContainer = Math.max(
      maxContainer,
      (right - left) * Math.min(height[left], height[right])
    )

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxContainer
}

import { testFunction } from '../../utils'
const testCases = [[[1, 8, 6, 2, 5, 4, 8, 3, 7]], [[1, 1]]]
const expectedResults = [49, 1]
testFunction(maxArea, testCases, expectedResults)
