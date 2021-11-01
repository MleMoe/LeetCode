function longestPalindrome(s: string): string {
	const palindrome = (str: string, l: number, r: number) => {
		while (l >= 0 && r < str.length && str[l] == str[r]) {
			l--
			r++
		}
		return str.slice(l + 1, r)
	}

	let result = ''
	for (let i = 0; i < s.length; i++) {
		const s1 = palindrome(s, i, i)
		const s2 = palindrome(s, i, i + 1)
		result = result.length > s1.length ? result : s1
		result = result.length > s2.length ? result : s2
	}
	return result
}

import { testFunction } from '../../utils'
const testCases = [['babad'], ['cbbd']]
const expectedResults = ['aba', 'bb']
testFunction(longestPalindrome, testCases, expectedResults)
