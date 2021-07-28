/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param s
 * @returns
 */
function replaceSpace(s: string): string {
  return s.replace(/ /g, (match) => '%20');
}

import { testFunction } from '../../utils';
const testcases = [['We are happy.']];
const expectedReults = ['We%20are%20happy.'];
testFunction(replaceSpace, testcases, expectedReults);
