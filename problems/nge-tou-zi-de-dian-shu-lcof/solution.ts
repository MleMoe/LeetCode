/**
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
 * 思路：n 次结果在 n-1 次结果逐次加 1-6，增加几率都是 1/6
 *      同时，由于是概率，所以不需要记录点数，需要处理的只是几率，所以只需要一直乘几率就好。（从概率上来说最小点数和最大点数几率是相同的）
 *      关键在于每次概率状态数组的个数，容易得出 n ~ 6*n ，所以是 6n - n + 1 = 5n +1
 * 故采用 dp 算法
 * dp[0] = [1/6] * 6
 * dp[n] = dp[n-1][i+j] += 1/6, j: 0-5
 * 由于只与上一状态有关，所以只需要一个 dp 数组就可以了，指代 上一个状态数组和新得出的数组
 * @param n
 * @returns
 */
function dicesProbability(n: number): number[] {
	let dp = new Array<number>(6).fill(1 / 6)
	let dpNext: number[]

	for (let p = 2; p <= n; p++) {
		dpNext = new Array(p * 5 + 1).fill(0)
		for (let i = 0; i < dp.length; i++) {
			for (let j = 0; j < 6; j++) {
				// 关键点：i+j
				dpNext[i + j] += dp[i] / 6
			}
		}
		dp = dpNext
	}
	return dp.map((num) => Number(num.toFixed(5)))
}

import { testFunction } from '../../utils'
const testCases = [[2]]
const expectedResults = [
	[
		0.02778, 0.05556, 0.08333, 0.11111, 0.13889, 0.16667, 0.13889, 0.11111,
		0.08333, 0.05556, 0.02778,
	],
]
testFunction(dicesProbability, testCases, expectedResults)
