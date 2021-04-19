function mailCheck(str: string): boolean {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
}

import { testFunction } from "../../utils";
const testcases = [
  ['cn42du@163.com'],
  ['ifat3@sina.com.cn'],
  ['ifat3.it@163.com'],
  ['ifat3@42du.online'],
  ['邮箱@42du.cn']
];
const expectedReults = [
  true,
  true,
  true,
  false,
  false
];
testFunction(mailCheck, testcases, expectedReults);
