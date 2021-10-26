/**
 * 题目：输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 思路：双指针
 * @param target
 * @returns
 */
function findContinuousSequence(target: number): number[][] {
	/**
	 *  n(2a + n-1)  == 2 target
	 *
	 */
	const res = []
	let i = 1,
		j = 2,
		sum = 0
	while (i <= Math.floor(target / 2) + 1) {
		sum = ((i + j) * (j - i + 1)) / 2
		if (sum === target) {
			res.push(new Array(j - i + 1).fill(0).map((_, index) => index + i))
			i++
			j++
		} else if (sum < target) {
			j++
		} else {
			i++
		}
	}
	return res
}

import { testFunction } from '../../utils'
const testCases = [[9], [15]]
const expectedResults = [
	[
		[2, 3, 4],
		[4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[4, 5, 6],
		[7, 8],
	],
]
testFunction(findContinuousSequence, testCases, expectedResults)
