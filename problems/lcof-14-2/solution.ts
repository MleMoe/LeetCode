/**
 * 大数越界情况下的求余问题
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
  let multiple = Math.floor(n / 3) - 1
  const remainder = n % 3
  let result = 1
  while (multiple > 0) {
    result = (result * 3) % 1000000007
    multiple--
  }
  switch (remainder) {
    case 0:
      return (result * 3) % 1000000007
    case 1:
      return (result * 4) % 1000000007
    case 2:
      return (result * 6) % 1000000007
  }
}

import { testFunction } from "../../utils"
const testCases = [[150]]
const expectedResults = [710104287]
testFunction(cuttingRope, testCases, expectedResults)
