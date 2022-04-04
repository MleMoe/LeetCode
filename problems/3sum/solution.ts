/**
 * 升序排列，遍历（nums[i]同前值跳过；当取得值时，l或r连续相同值跳过）+双指针，时间 O(n*n)
 * @param nums
 * @returns
 */
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  let l, r
  const res = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res
    }
    if (nums?.[i - 1] === nums[i]) {
      continue
    }

    l = i + 1
    r = nums.length - 1

    while (l < r) {
      if (nums[l] + nums[r] === -nums[i]) {
        res.push([nums[i], nums[l], nums[r]])

        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }

        l++
        r--
      } else if (nums[l] + nums[r] < -nums[i]) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}

import { testFunction } from '../../utils'
const testCases = [[[-1, 0, 1, 2, -1, -4]], [[0, 0, 0]]]
const expectedResults = [
  [
    [-1, -1, 2],
    [-1, 0, 1],
  ],
  [[0, 0, 0]],
]
testFunction(threeSum, testCases, expectedResults)
