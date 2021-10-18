/**
 * 每 wait 毫秒内最多只调用一次 fn
 * @param fn 需要节流的函数
 * @param wait wait毫秒
 */
function throttle(fn: Function, wait: number) {
  let timer
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(args)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}

const fn = throttle((n) => {
  console.log(n)
}, 1000)
fn(1)
fn(2)
