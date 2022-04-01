function minArray(numbers: number[]): number {
  for (const num of numbers) {
    if (numbers[0] > num) return num;
  }
  return numbers[0];
}

import { testFunction } from '../../utils';
const testCases = [[[3, 4, 5, 1, 2]]];
const expectedResults = [1];
testFunction(minArray, testCases, expectedResults);
