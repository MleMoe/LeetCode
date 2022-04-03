/**
 * 按位遍历数，得逆序结果，比较；
 * 可去除大数限制：只遍历一半，终止条件 numReverse >= num （考虑中位数）
 * 时间都是 O(log n)
 * @param x
 * @returns
 */
function isPalindrome(x: number): boolean {
  // if (x < 0) {
  //   return false
  // }
  // let numReverse = 0,
  //   num = x
  // while (num > 0) {
  //   numReverse = numReverse * 10 + (num % 10)
  //   num = Math.floor(num / 10)
  // }
  // return numReverse === x ? true : false

  // 去除 0 结尾的影响，因为 reverse 并不会捕获到尾部的 0 序列
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false
  }

  let numReverse = 0
  while (numReverse < x) {
    numReverse = numReverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return x === numReverse || x === Math.floor(numReverse / 10)
}

import { testFunction } from '../../utils'
const testCases = [[-121], [121], [10]]
const expectedResults = [false, true, false]
testFunction(isPalindrome, testCases, expectedResults)
