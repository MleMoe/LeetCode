function minNumber(nums: number[]): string {
  nums.sort(
    (a, b) =>
      parseInt(a.toString() + b.toString()) -
      parseInt(b.toString() + a.toString())
  )
  return nums.join('')
}

import { testFunction } from '../../utils'
const testCases = [[[3, 30, 34, 5, 9]]]
const expectedResults = ['3033459']
testFunction(minNumber, testCases, expectedResults)
