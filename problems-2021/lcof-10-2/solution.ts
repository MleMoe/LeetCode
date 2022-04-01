/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
   答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * @param n 
 * @returns 
 */
function numWays(n: number): number {
  if (n < 2) {
    return 1;
  }
  let a = 1,
    b = 2,
    i = 2;
  while (i < n) {
    [a, b] = [b % 1000000007, (a + b) % 1000000007];
    i++;
  }
  return b;
}

import { testFunction } from '../../utils';
const testcases = [[7]];
const expectedReults = [21];
testFunction(numWays, testcases, expectedReults);
