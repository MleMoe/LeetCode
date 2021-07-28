/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

  F(0) = 0,   F(1) = 1
  F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
  斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

  答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 * @param n 
 * @returns 
 */
function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  let a = 0,
    b = 1,
    i = 1;
  while (i < n) {
    [a, b] = [b % 1000000007, (a + b) % 1000000007];
    i++;
  }
  return b;
}

import { testFunction } from '../../utils';
const testcases = [[5], [81]];
const expectedReults = [5, 107920472];
testFunction(fib, testcases, expectedReults);
