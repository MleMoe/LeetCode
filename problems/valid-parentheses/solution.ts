/**
 * 栈
 * @param s
 * @returns
 */
function isValid(s: string): boolean {
  const stack = []
  const fn = (a: string, b: string) => {
    if (
      (a === '{' && b === '}') ||
      (a === '[' && b === ']') ||
      (a === '(' && b === ')')
    ) {
      return true
    }
    return false
  }
  for (const c of s) {
    if (fn(stack[stack.length - 1], c)) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return !stack.length
}

import { testFunction } from '../../utils'
const testCases = []
const expectedResults = []
testFunction(isValid, testCases, expectedResults)
