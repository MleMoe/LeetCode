function nthUglyNumber(n: number): number {
  const dp = [1]
  let prePos2 = 0,
    prePos3 = 0,
    prePos5 = 0
  for (let i = 1; i < n; i++) {
    const min = Math.min(dp[prePos2] * 2, dp[prePos3] * 3, dp[prePos5] * 5)
    dp.push(min)
    if (min === dp[prePos2] * 2) {
      prePos2++
    }
    if (min === dp[prePos3] * 3) {
      prePos3++
    }
    if (min === dp[prePos5] * 5) {
      prePos5++
    }
  }
  return dp[n - 1]
}

import { testFunction } from '../../utils'
const testCases = [[10]]
const expectedResults = [12]
testFunction(nthUglyNumber, testCases, expectedResults)
