/**
 * 三数之和基础上增加一层遍历，时间 O(n*n*n)
 * @param nums
 * @param target
 * @returns
 */
function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return []
  }

  nums.sort((a, b) => a - b)

  let l, r
  const res = []

  for (let k = 0; k < nums.length; k++) {
    let targetNew = target - nums[k]

    for (let i = k + 1; i < nums.length; i++) {
      l = i + 1
      r = nums.length - 1

      while (l < r) {
        if (nums[l] + nums[r] === targetNew - nums[i]) {
          res.push([nums[k], nums[i], nums[l], nums[r]])

          while (l < r && nums[l] === nums[l + 1]) {
            l++
          }
          while (l < r && nums[r] === nums[r - 1]) {
            r--
          }

          l++
          r--
        } else if (nums[l] + nums[r] < targetNew - nums[i]) {
          l++
        } else {
          r--
        }
      }

      while (nums?.[i + 1] === nums[i]) {
        i++
      }
    }

    while (nums?.[k + 1] === nums[k]) {
      k++
    }
  }

  return res
}

import { testFunction } from '../../utils'
const testCases = [
  [[1, 0, -1, 0, -2, 2], 0],
  [[2, 2, 2, 2, 2], 8],
  [[0, 0, 4, -2, -3, -2, -2, -3], -1],
]
const expectedResults = [
  [
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ],
  [[2, 2, 2, 2]],
  [[-3, -2, 0, 4]],
]
testFunction(fourSum, testCases, expectedResults)
