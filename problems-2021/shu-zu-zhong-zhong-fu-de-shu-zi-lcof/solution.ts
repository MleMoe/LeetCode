/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * @param arr
 * @returns
 */
function xxx(arr: number[]): number {
  const numSet = new Set();
  for (const num of arr) {
    if (numSet.has(num)) {
      return num;
    }
    numSet.add(num);
  }
  return NaN;
}

import { testFunction } from '../../utils';
const testcases = [[[2, 3, 1, 0, 2, 5, 3]]];
const expectedReults = [2];
testFunction(xxx, testcases, expectedReults);
