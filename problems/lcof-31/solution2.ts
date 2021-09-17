function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = []
  for (const num of pushed) {
    stack.push(num)
    while (stack.length && stack.slice(-1)[0] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }

  return !stack.length
}

import { testFunction } from '../../utils'
const testCases = [
  [
    [1, 2, 3, 4, 5],
    [4, 5, 3, 2, 1],
  ],
  [
    [1, 2, 3, 4, 5],
    [4, 3, 5, 1, 2],
  ],
]
const expectedResults = [true, false]
testFunction(validateStackSequences, testCases, expectedResults)
