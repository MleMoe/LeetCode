function getPrime(left, right) {
  const nums = new Array(right - left + 1).fill(0).map((e, i) => e + left + i)
  return nums.filter(isPrime)
}

function isPrime(v) {
  let i = 2,
    len = Math.sqrt(v)
  for (; i <= len; i++) {
    if (v % i === 0) return false
  }
  return true
}

const s = getPrime(5, 20).reduce((s, e) => s + e, 0)

console.log(s)
