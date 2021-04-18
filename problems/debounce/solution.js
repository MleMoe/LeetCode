function debounce(func, wait){
  let timeout = null
  return (...args)=>{
    if (timeout){
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(()=>{
      func(...args)
    }, wait)
  }
}

function realfn(x, y){
  console.log(x, y)
}
// 防抖总是执行最新的，因为在没到时间的时候重新触发，会重新计时
let x = debounce(realfn, 200)
x(1, 2)
x(2, 3)