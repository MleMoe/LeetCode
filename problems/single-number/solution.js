// function singleNumber(nums) {
//   let hash = nums.reduce((res, e) => {
//     if (res.has(e)) {
//       res.set(e, res.get(e) + 1)
//     }
//     else {
//       res.set(e, 1)
//     }
//     return res
//   }, new Map())
//   for (let [k,v] of hash) {
//     if (v == 1) {
//       return k
//     }
//   }
// }
// console.log(singleNumber([2, 2, 1]))

var a = {1:1, 2:2}
console.log(Object.keys(a))
// console.log(a.hasOwnProperty('1'))
var b = new Map()
b.set(1, 1)
console.log(b.get(1))
console.log(b)