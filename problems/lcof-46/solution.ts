function translateNum(num: number): number {
  const numStr = num.toString()
  const recur = (str: string) => {
    console.log(str)
    if (str.length === 1) {
      return 1
    }
    if (str.length === 2) {
      if (str < '26' && str > '09') {
        return 2
      } else {
        return 1
      }
    }
    if (str.slice(0, 2) < '26' && str.slice(0, 2) > '09') {
      return recur(str.slice(2)) + recur(str.slice(1))
    } else {
      return recur(str.slice(1))
    }
  }
  return recur(numStr)
}

import { testFunction } from '../../utils'
const testCases = [[25], [12258], [506]]
const expectedResults = [2, 5, 1]
testFunction(translateNum, testCases, expectedResults)
