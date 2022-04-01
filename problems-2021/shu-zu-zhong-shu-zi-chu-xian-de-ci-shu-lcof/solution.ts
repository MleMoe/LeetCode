/**
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。
 * 思路：异或运算，相同值异或为 0，值与 0 异或 为原值
 * @param nums
 * @returns
 */
function singleNumbers(nums: number[]): number[] {
	const n = nums.reduce((result, e) => result ^ e, 0)
	let m = 1
	while ((n & m) === 0) {
		m <<= 1
	}
	return nums.reduce(
		(results, e) => {
			if ((e & m) > 0) {
				results[0] ^= e
			} else {
				results[1] ^= e
			}
			return results
		},
		[0, 0]
	)
}

import { testFunction } from '../../utils'
const testCases = [[[4, 1, 4, 6]], [[1, 2, 10, 4, 1, 4, 3, 3]]]
const expectedResults = [
	[1, 6],
	[2, 10],
]
testFunction(singleNumbers, testCases, expectedResults)
