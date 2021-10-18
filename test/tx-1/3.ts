/**
 * 计算n级楼梯的爬法数
 * @param n 楼梯级数
 * @returns 爬法数
 */
function calc(n: number) {
  // f(n) = f(n-1) + f(n-2)
  // f(0) = 1 f(1) = 1 f(2) = 2 f(3) = 3
  if (n < 2) {
    return 1
  }
  return calc(n - 1) + calc(n - 2)
}

console.log(calc(4))
