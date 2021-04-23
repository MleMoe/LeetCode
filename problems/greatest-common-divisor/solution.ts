function xxx(a: number, b: number): number {
  if (a < b) [a, b] = [b, a];
  while (a % b !== 0) [a, b] = [b, a % b];
  return b;
  // return a % b === 0 ? b : xxx(b, a % b);
}

import { testFunction } from "../../utils";
const testcases = [
  [10, 0],
  [270, 105],
];
const expectedReults = [5, 15];
testFunction(xxx, testcases, expectedReults);
