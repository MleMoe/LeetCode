function translateNum(num: number): number {
  const numStr = num.toString()
  const length = numStr.length
  const recur = (i: number) => {
    if (i === length - 1) {
      return 1
    }
    if (i === length - 2) {
      if (numStr.slice(-2) < '26' && numStr.slice(-2) > '09') {
        return 2
      } else {
        return 1
      }
    }
    if (numStr[i] + numStr[i + 1] < '26' && numStr[i] + numStr[i + 1] > '09') {
      return recur(i + 2) + recur(i + 1)
    } else {
      return recur(i + 1)
    }
  }
  return recur(0)
}

import { testFunction } from '../../utils'
const testCases = [[25], [12258], [506]]
const expectedResults = [2, 5, 1]
testFunction(translateNum, testCases, expectedResults)
