/**
 * 测试
 * @param callback 函数
 * @param testcases 测试用例
 * @param expectedReults 预期结果
 */
export function testFunction(
  callback: Function,
  testcases: any[],
  expectedReults?: any[]
) {
  console.log('Problem:', callback.name)

  testcases.forEach((testcase, i) => {
    let result
    result = callback(...testcase)
    console.log()
    let title = `测试 ${i + 1}`
    if (expectedReults) {
      title += ': '
      if (isEqual(result, expectedReults[i])) {
        title += '✅'
      } else {
        title += '❌'
      }
    }

    console.log(title)
    console.log(`输入:`, ...testcase)
    console.log('输出:', result)

    if (expectedReults) {
      console.log('预期结果:', expectedReults[i])
    } else {
      console.log()
    }
  })
}

function isEqual(a: any, b: any) {
  /**
   * Object.is() 方法判断两个值是否为同一个值。如果满足以下条件则两个值相等:
    都是 undefined
    都是 null
    都是 true 或 false
    都是相同长度的字符串且相同字符按相同顺序排列
    都是相同对象（意味着每个对象有同一个引用）
    都是数字且
      都是 +0
      都是 -0
      都是 NaN
      或都是非零而且非 NaN 且为同一个值
   */
  // 除了引用类型都可以判断
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return Object.is(a, b)
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }

  const keysA = Object.keys(a)
  let result = true
  for (const key of keysA) {
    result &&= isEqual(a[key], b[key])
    if (!result) {
      return false
    }
  }
  return true
}
