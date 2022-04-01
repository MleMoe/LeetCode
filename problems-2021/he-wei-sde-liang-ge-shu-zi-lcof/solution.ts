/**
 * 题目描述：输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * 思路：双指针
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] {
	let a = 0,
		b = nums.findIndex(
			(_, i) => nums[i] >= target - nums[a] && nums[i - 1] < target - nums[a]
		)
	// 防止出现 nums[a] + nums[nums.length-1] < target
	b = b === -1 ? nums.length - 1 : b

	while (nums[a] + nums[b] !== target) {
		if (nums[a] + nums[b] > target) {
			b--
		} else if (nums[a] + nums[b] < target) {
			a++
		}
	}
	return [nums[a], nums[b]]
}

import { testFunction } from '../../utils'
const testCases = [
	[[2, 7, 11, 15], 9],
	[[10, 26, 30, 31, 47, 60], 40],
	[[14, 15, 16, 22, 53, 60], 76],
]
const expectedResults = [
	[2, 7],
	[10, 30],
	[16, 60],
]
testFunction(twoSum, testCases, expectedResults)
