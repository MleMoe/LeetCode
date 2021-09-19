function reversePairs(nums: number[]): number {
  let num = 0
  const mSort = (arr: number[]) => {
    if (arr.length <= 1) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    return merge(mSort(arr.slice(0, mid)), mSort(arr.slice(mid)))
  }

  const merge = (arr1: number[], arr2: number[]) => {
    const res = []
    while (arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        res.push(arr2.shift())
        // 逆序对，以 right 数组元素为基准
        num += arr1.length
      } else {
        res.push(arr1.shift())
      }
    }
    return res.concat(arr1.length ? arr1 : arr2)
  }
  mSort(nums)
  return num
}

import { testFunction } from '../../utils'
const testCases = [[[7, 5, 6, 4]], [[]]]
const expectedResults = [5, 0]
testFunction(reversePairs, testCases, expectedResults)
