function spiralOrder(matrix: number[][]): number[] {
  const height = matrix.length
  const width = matrix[0]?.length
  if (!width || !height) {
    return []
  }
  let l = 0,
    r = width - 1,
    t = 0,
    b = height - 1

  const res = []

  while (true) {
    for (let i = l; i <= r; i++) res.push(matrix[t][i]) // left to right.
    if (++t > b) break
    for (let i = t; i <= b; i++) res.push(matrix[i][r]) // top to bottom.
    if (l > --r) break
    for (let i = r; i >= l; i--) res.push(matrix[b][i]) // right to left.
    if (t > --b) break
    for (let i = b; i >= t; i--) res.push(matrix[i][l]) // bottom to top.
    if (++l > r) break
  }

  return res
}

import { testFunction } from '../../utils'
const testCases = [
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
  ],
]
const expectedResults = [
  [1, 2, 3, 6, 9, 8, 7, 4, 5],
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
]
testFunction(spiralOrder, testCases, expectedResults)
