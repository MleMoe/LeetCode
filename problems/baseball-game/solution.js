/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = []
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i]
    switch (op) {
    case '+':
      stack.push(stack[stack.length-1] + stack[stack.length-2])
      break
    case 'D':
      stack.push(2 * stack[stack.length-1])
      break
    case 'C':
      stack.pop()
      break
    default:
      stack.push(parseInt(op))
      break
    }
  }
  let sum = 0
  stack.map(val => sum += val)
  return sum
}
