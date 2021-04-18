function throttle(fn, time){
  let timeout
  return (...rest)=> {
    if (!timeout){
      timeout = setTimeout(()=>{
        fn(...rest)
        clearTimeout(timeout)
        timeout = null
      }, time)
    }
  }
}
function realfn(x){
  console.log(x)
}

// 节流总是执行最早的，因为没有过完时间拒绝执行新的，过完时间执行后清空定时器，才可接受新的任务
let x = throttle(realfn, 200)
x(1)
x(2)
