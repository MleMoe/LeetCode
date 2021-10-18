function getIndex(k: number, m: number, deliciousness: number[]) {
  let num = 0
  for (let i = deliciousness.length - 1; i > -1; i--) {
    if (deliciousness[i] > m) {
      num++
      if (num === k) {
        return i
      }
    }
  }
  return -1
}

let y3 = getIndex(1, 3, [6, 9, 3, 6])
console.log(y3)
