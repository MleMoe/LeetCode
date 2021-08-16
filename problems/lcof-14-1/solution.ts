/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * 所有大于 3 的数都可以拆成 3 2
 * 归纳法：3*3 > 3*2 > 2*2
 * @param n
 * @returns
 */
function cuttingRope(n: number): number {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  switch (n % 3) {
    case 0:
      return Math.pow(3, Math.round(n / 3))
    case 1:
      return Math.pow(3, Math.floor(n / 3) - 1) * 4
    case 2:
      return Math.pow(3, Math.floor(n / 3)) * 2
  }
}

import { testFunction } from "../../utils"
const testCases = [[10]]
const expectedResults = [36]
testFunction(cuttingRope, testCases, expectedResults)
