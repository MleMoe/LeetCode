function majorityElement(nums: number[]): number {
  const map = new Map<number, number>()
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
    if (map.get(num) > nums.length / 2) {
      return num
    }
  }
}

import { testFunction } from '../../utils'
const testCases = [[[1, 2, 3, 2, 2, 2, 5, 4, 2]], [[1]]]
const expectedResults = [2, 1]
testFunction(majorityElement, testCases, expectedResults)
