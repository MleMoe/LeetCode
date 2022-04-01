function reverse(x: number): number {
  let sign = 1;
  if (x < 0) {
    sign = -1
    x = -x;
  }
  let nums = [];
  while (x > 0) {
    nums.unshift(x % 10);
    x = Math.floor(x / 10);
  }
  let res = nums.reduce((res, a, i) => {
    res += a * (10 ** i);
    return res;
  }, 0)
  res = res >= (2 ** 31 - 1) ? 0 : res;
  return sign * res;
};

console.log(reverse(1534236469));