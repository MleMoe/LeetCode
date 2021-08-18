function isMatch(s: string, p: string): boolean {
  const m = s.length + 1
  const n = p.length + 1
  // dp[n][m] 代表 s 的前 n 个字符 与 p 的前 m 个字符是否匹配， 0 0 代表空串
  const dp = new Array(m).fill(false).map(() => new Array(n).fill(false))
  // 初始化
  // s/p 都为空值时满足
  dp[0][0] = true
  for (let i = 2; i < n; i += 2) {
    dp[0][i] = dp[0][i - 2] && p[i - 1] === '*'
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // * ，p[j-2] 次数为 0, p[j-1] 与 p[j-2] 作废
      if (p[j - 1] === '*') {
        if (
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'))
        ) {
          dp[i][j] = true
        }
      } else {
        dp[i - 1][j - 1] &&
          (s[i - 1] === p[j - 1] || p[j - 1] === '.') &&
          (dp[i][j] = true)
      }
    }
  }

  return dp[m - 1][n - 1]
}

import { testFunction } from '../../utils'
const testCases = [
  ['aa', 'a'],
  ['ab', '.*'],
  ['aab', 'c*a*b'],
]
const expectedResults = [false, true, true]
testFunction(isMatch, testCases, expectedResults)
