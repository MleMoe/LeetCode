/**
 * 整个快排，pivot index === k 时可终止
 * @param arr
 * @param k
 * @returns
 */
function getLeastNumbers(arr: number[], k: number): number[] {
  const partion = (l: number, h: number) => {
    const pivot = arr[l]
    while (l < h) {
      while (l < h && arr[h] >= pivot) {
        h--
      }
      arr[l] = arr[h]
      while (l < h && arr[l] <= pivot) {
        l++
      }
      arr[h] = arr[l]
    }
    arr[l] = pivot
    return l
  }

  const quickSort = (l: number, h: number) => {
    if (l < h) {
      const pivotIndex = partion(l, h)
      if (pivotIndex === k) {
        return
      } else if (pivotIndex < k) {
        // 前 pivotIndex 已经都是前 k 小了
        quickSort(pivotIndex + 1, h)
      } else {
        quickSort(l, pivotIndex - 1)
      }
    }
  }

  quickSort(0, arr.length - 1)

  return arr.slice(0, k)
}

import { testFunction } from '../../utils'
const testCases = [[[1, 2, 3, -1, -2, 0], 3]]
const expectedResults = [[-2, -1, 0]]
testFunction(getLeastNumbers, testCases, expectedResults)
