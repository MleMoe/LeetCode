function maxValue(grid: number[][]): number {
  if (!grid.length || !grid[0].length) {
    return 0
  }
  grid[0].reduce((pre, _, i) => {
    grid[0][i] += pre
    return grid[0][i]
  }, 0)

  grid.reduce((pre, _, i) => {
    grid[i][0] += pre
    return grid[i][0]
  }, 0)

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] +=
        grid[i - 1][j] > grid[i][j - 1] ? grid[i - 1][j] : grid[i][j - 1]
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
}

import { testFunction } from '../../utils'
const testCases = [
  [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ],
  ],
]
const expectedResults = [12]
testFunction(maxValue, testCases, expectedResults)
