/**
 * dfs + 剪枝，length 个分叉口+多重选择
 * @param s
 * @returns
 */
function permutation(s: string): string[] {
  const charList = [...s]
  const res = []
  const forward = (index: number) => {
    if (index === s.length - 1) {
      res.push(charList.join(''))
    }

    const preSet = new Set()
    for (let j = index; j < s.length; j++) {
      if (preSet.has(charList[j])) {
        continue
      }
      preSet.add(charList[j])
      ;[charList[index], charList[j]] = [charList[j], charList[index]]
      forward(index + 1)
      ;[charList[index], charList[j]] = [charList[j], charList[index]]
    }
  }
  forward(0)
  return res
}

import { testFunction } from '../../utils'
const testCases = [['abc'], ['aab']]
const expectedResults = [
  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
  ['aab', 'aba', 'baa'],
]
testFunction(permutation, testCases, expectedResults)
