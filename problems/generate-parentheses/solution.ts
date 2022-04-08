/**
 * DP，f(n) = `(${f(i)})${f(n-1-i)}`, 0<i<n-1，划分为括号内和括号外
 * @param n
 * @returns
 */
function generateParenthesis(n: number): string[] {
  let total = [[''], ['()']]
  if (n < 2) {
    return total[n]
  }

  for (let i = 2; i <= n; i++) {
    let newResult = []
    for (let j = 0; j < i; j++) {
      const list1 = total[j]
      const list2 = total[i - 1 - j]
      for (const str1 of list1) {
        for (const str2 of list2) {
          newResult.push(`(${str1})${str2}`)
        }
      }
    }
    total.push(newResult)
  }
  return total[n]
}

import { testFunction } from '../../utils'
const testCases = [[4]]
const expectedResults = [
  [
    '(((())))', //
    '((()()))', //
    '((())())', //
    '((()))()', //
    '(()(()))', //
    '(()()())', // 1
    '(()())()', //
    '(())(())',
    '(())()()', //
    '()((()))', //
    '()(()())', //
    '()(())()', //
    '()()(())', //
    '()()()()', // 1
  ],
]
testFunction(generateParenthesis, testCases, expectedResults)
