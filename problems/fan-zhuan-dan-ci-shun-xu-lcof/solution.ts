/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 * @param arr
 * @returns
 */
function reverseWords(s: string): string {
	return s
		.trim()
		.split(/[ ]+/)
		.reduce((res, word) => word + ' ' + res, '')
		.trim()
}

import { testFunction } from '../../utils'
const testCases = [
	['the sky is blue'],
	['  hello world!  '],
	['a good   example'],
]
const expectedResults = ['blue is sky the', 'world! hello', 'example good a']
testFunction(reverseWords, testCases, expectedResults)
