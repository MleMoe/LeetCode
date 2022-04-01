function xxx(nums: number[], target: number): number {
  // 排序，升序排列
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let res = 0;
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j -= 1;
    }
    else {
      res += (j - i);
      i += 1;
    }
  }
  return res % 1000000007;
}

import { testFunction } from "../../utils";
const testcases = [
  [[40330, 31957, 63879, 13204, 47923, 56282, 75126, 3423, 98483], 60482]
];
const expectedReults = [7];
testFunction(xxx, testcases, expectedReults);