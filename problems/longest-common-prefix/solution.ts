const { log } = console
function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1) {
    return ''
  }
  let pos = strs[0].length - 1;
  for (let i = 1; i < strs.length; i++) {
    log(pos)

    let j = 0;
    while (j <= pos && j < strs[i].length && strs[i][j] === strs[0][j]);
    log(pos, j)
    pos = pos === j ? pos : j - 1;
    log(pos, j)
    if (pos < 0) {
      return ''
    }
    log(pos, j)

  }
  return strs[0].slice(0, pos + 1)
}

let test_cases = [["ab", "b"]]
for (let tc of test_cases) {
  let ans = longestCommonPrefix(tc)
  console.log(ans)
}