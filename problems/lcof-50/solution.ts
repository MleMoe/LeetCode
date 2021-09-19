function firstUniqChar(s: string): string {
  return (
    Array.from(
      [...s].reduce((map, el) => {
        if (map.has(el)) {
          map.set(el, map.get(el) + 1)
        } else {
          map.set(el, 1)
        }
        return map
      }, new Map<string, number>())
    ).find((el) => el[1] === 1)?.[0] || ' '
  )
}

import { testFunction } from '../../utils'
const testCases = [['abaccdeff'], [''], ['aaa']]
const expectedResults = ['b', ' ', ' ']
testFunction(firstUniqChar, testCases, expectedResults)
