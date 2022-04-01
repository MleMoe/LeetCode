export function multipleSort(arr: Array<number[]>): Array<number[]> {
  arr.sort((a, b) => {
    let res = 0
    if (a[1] < b[1]) {
      res = -1
    }
    else if (a[1] === b[1]) {
      res = a[0] < b[0] ? -1 : 0
    }
    else {
      res = 1
    }
    return res
  })
  return arr;
}
let s = multipleSort([
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 6],
  [6, 1]
])
console.log(s)
