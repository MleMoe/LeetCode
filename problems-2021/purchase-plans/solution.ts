function xxx(nums: number[], target: number): number {
  // 排序，升序排列
  nums.sort((a, b) => a - b);
  let i = nums.length - 1;
  let j = 0;
  let res = 0;
  while (i > 0) {
    if (nums[i] >= target) {
      // 去除掉 >=target 的值，因为不可能构成有效组合
      nums.pop();
      i -= 1;
      continue;
    }
    if (nums[i] + nums[i - 1] <= target) {
      res += (i + 1) * i / 2;
      break;
    }
    j = 0;
    while (j < i) {
      if (nums[i] + nums[j] <= target) {
        res += 1;
        j += 1;
      }
      else {
        break;
      }
    }
    i -= 1;
  }
  return res % 1000000007;
}

import { testFunction } from "../../utils";
const testcases = [
  [[40330, 31957, 63879, 13204, 47923, 56282, 75126, 3423, 98483], 60482]
];
const expectedReults = [7];
testFunction(xxx, testcases, expectedReults);