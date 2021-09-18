function translateNum(num: number): number {
  let dpA = 1,
    dpB = 1
  const str = num.toString()
  for (let i = 2; i < str.length + 1; i++) {
    ;[dpA, dpB] = [
      dpB,
      str.slice(i - 2, i) <= '25' && str.slice(i - 2, i) >= '10'
        ? dpA + dpB
        : dpB,
    ]
  }
  return dpB
}

import { testFunction } from '../../utils'
const testCases = [[25], [12258], [506]]
const expectedResults = [2, 5, 1]
testFunction(translateNum, testCases, expectedResults)
