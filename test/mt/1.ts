let arr = []
// let line
// while ((line = read_line()) != '') {
//   arr.push(line.split(' ').map((v) => parseInt(v)))
// }

const n = 3
const aArray = [1, 3, 2]
// arr[2].splice(0, 0, arr[2].indexOf(1)+2)
// const lines = new Array(n - 1)
// for (let i = 0; i < arr[2].length; i++) {
//   lines[arr[2][i] - 1] = i + 1
// }

const lines = [1, 2]
const result = new Array(n).fill(1)
for (let i = 0; i < n; i++) {
  // console.log('i: ', i)
  for (let j = i + 1; j < n; j++) {
    console.log('i-j: ', i, j)
    let p = i
    let max = aArray[i]
    let maxIndex = i
    while (true) {
      console.log(lines[p], aArray[lines[p]])
      if (aArray[lines[p]] > max) {
        max = aArray[lines[p]]
        maxIndex = lines[p]
      }
      p = lines[p]
      if (p === j) {
        break
      }
    }
    result[maxIndex]++
  }
}

// 1 4 1
console.log(result)
