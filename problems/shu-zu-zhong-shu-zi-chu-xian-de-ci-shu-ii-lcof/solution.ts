/**
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 * 思路：位运算
 * @param nums
 * @returns
 */
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
