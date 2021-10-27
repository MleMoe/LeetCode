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
   当一个元素进入队列的时候，它前面所有比它小的元素就不会再对答案产生影响。
   复杂度分析

时间复杂度：O(1)（插入，删除，求最大值）
删除操作于求最大值操作显然只需要 O(1) 的时间。
而插入操作虽然看起来有循环，做一个插入操作时最多可能会有 n 次出队操作。但要注意，由于每个数字只会出队一次，因此对于所有的 n 个数字的插入过程，对应的所有出队操作也不会大于 n 次。因此将出队的时间均摊到每个插入操作上，时间复杂度为 O(1)。
空间复杂度：O(n)，需要用队列存储所有插入的元素。

 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
	// 空输入值处理
	if (!nums.length || !k) {
		return []
	}

	// 初始化
	let queue = [nums[0]]
	for (let i = 1; i < k; i++) {
		queue = queue.filter((e) => e >= nums[i])
		queue.push(nums[i])
	}
	const res = [queue[0]]
	nums[0] === queue[0] && queue.shift()

	// 逐次递加处理
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
