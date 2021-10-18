// 4 1 6 9
// 3 2 7
// 5
async function async1() {
  console.log(1) // 2
  await async2()
  console.log(2) // 6
}
async function async2() {
  console.log(3) // 5
}

console.log(4) // 1

setTimeout(function () {
  console.log(5) // 8
}, 0)

async1()

new Promise(function (resolve) {
  console.log(6) // 3
  resolve()
})
  .then(function () {
    console.log(7) // 7
  })
  .then(function () {
    console.log(8)
  })
console.log(9) // 4
// 4 6 9
// 1 7
// 5
// 3 2
