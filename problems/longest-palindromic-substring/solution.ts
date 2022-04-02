/**
 * 遍历字符串+中心扩散，str.slice(l + 1, r) 是精髓
 * 时间 O(n*n)
 * @param s
 */
function longestPalindrome(s: string): string {
  const fn = (str: string, l: number, r: number) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--
      r++
    }
    return str.slice(l + 1, r)
  }

  let result = ''

  for (let i = 0; i < s.length; i++) {
    const s1 = fn(s, i, i)
    const s2 = fn(s, i, i + 1)
    console.log(result, s1, s2)
    result = result.length < s1.length ? s1 : result
    result = result.length < s2.length ? s2 : result
  }

  return result
}

import { testFunction } from '../../utils'
const testCases = [['abcde']]
const expectedResults = ['a']
testFunction(longestPalindrome, testCases, expectedResults)
