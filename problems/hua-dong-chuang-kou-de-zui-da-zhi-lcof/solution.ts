/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 

      滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3 5  3  6  7       3 
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
 * 思路：不严格递增队列
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
	if (!nums.length || !k) {
		return []
	}
	let queue = [nums[0]]
	for (let i = 1; i < k; i++) {
		queue = queue.filter((e) => e >= nums[i])
		queue.push(nums[i])
	}
	const res = [queue[0]]
	nums[0] === queue[0] && queue.shift()

	let a = 1,
		b = k
	while (b < nums.length) {
		queue = queue.filter((e) => e >= nums[b])
		queue.push(nums[b])

		res.push(queue[0])
		nums[a] === queue[0] && queue.shift()

		a++
		b++
	}

	return res
}

import { testFunction } from '../../utils'
const testCases = [
	[[1, 3, -1, -3, 5, 3, 6, 7], 3],
	[[], 0],
	[[1, -1], 1],
]
const expectedResults = [[3, 3, 5, 5, 6, 7], [], [1, -1]]
testFunction(maxSlidingWindow, testCases, expectedResults)
