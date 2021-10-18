function getPosition(m: number, k: number, number: number[]) {
  let sum = 0
  let result = -1
  for (let i = 0; i < number.length; i++) {
    sum += number[i]
    if (sum % m === k) {
      result = i
    }
  }
  return result
}

const y = getPosition(6, 0, [3, 1, 3, 2, 2, 2])

console.log(y)

const y2 = getPosition(9, 6, [6, 3, 4, 9, 10, 7, 10, 2, 6])
console.log(y2)
