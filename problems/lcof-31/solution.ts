function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = []
  while (popped.length) {
    if (!stack.length || stack.slice(-1)[0] !== popped[0]) {
      if (stack.includes(popped[0])) {
        return false
      } else {
        stack.push(pushed.shift())
      }
    } else {
      popped.shift()
      stack.pop()
    }
  }
  return true
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
