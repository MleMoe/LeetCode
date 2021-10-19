function singleNumber(nums: number[]): number {
	let result = 0
	for (let i = 0; i < 31; i++) {
		let count = 0
		const digit = 1 << i
		nums.forEach((n) => {
			if (digit & n) {
				count++
			}
		})
		if (count % 3) {
			result = result | digit
		}
	}
	return result
}

import { testFunction } from '../../utils'
const testCases = [[[9, 1, 7, 9, 7, 9, 7]]]
const expectedResults = [1]
testFunction(singleNumber, testCases, expectedResults)
