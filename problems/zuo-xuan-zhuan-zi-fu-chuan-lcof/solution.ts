/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param arr
 * @returns
 */
function reverseLeftWords(s: string, n: number): string {
	return s.slice(n) + s.slice(0, n)
}

import { testFunction } from '../../utils'
const testCases = [
	['abcdefg', 2],
	['lrloseumgh', 6],
]
const expectedResults = ['cdefgab', 'umghlrlose']
testFunction(reverseLeftWords, testCases, expectedResults)
