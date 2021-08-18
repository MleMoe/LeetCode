/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字

 * @param s
 * @returns
 */
function isNumber(s: string): boolean {
  // 去除空格
  s = s.trim()
  // 注意运算符的优先级：转义符\ > 	圆括号和方括号 > 限定符（即出现频次） > 定位点和序列 > 或
  return /^[\+\-]?(\d+|\d*\.\d+|\d+\.)((e|E)[\+\-]?\d+)?$/.test(s)
}

import { testFunction } from '../../utils'
const testCases = [
  ['26.'],
  ['.1'],
  ['+100'],
  ['5e2'],
  ['+'],
  ['-123'],
  ['3.1416'],
  ['-1E-16'],
  ['0123'],
  ['12e'],
  ['1a3.14'],
  ['1.2.3'],
  ['+-5'],
  ['12e+5.4'],
]
const expectedResults = [
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
]
testFunction(isNumber, testCases, expectedResults)
