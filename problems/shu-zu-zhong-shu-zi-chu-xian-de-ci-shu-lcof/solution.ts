function singleNumbers(nums: number[]): number[] {
	return Array.from(
		nums.reduce((set, e) => {
			if (set.has(e)) {
				set.delete(e)
			} else {
				set.add(e)
			}
			return set
		}, new Set<number>())
	)
}

import { testFunction } from '../../utils'
const testCases = [[[4, 1, 4, 6]], [[1, 2, 10, 4, 1, 4, 3, 3]]]
const expectedResults = [
	[1, 6],
	[2, 10],
]
testFunction(singleNumbers, testCases, expectedResults)
