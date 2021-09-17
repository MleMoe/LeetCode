function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  const res = []
  let queue: TreeNode[] = [root]
  let leftToRight = true
  while (queue.length) {
    const tmp = []
    const length = queue.length
    for (let i = 0; i < length; i++) {
      tmp.push(queue[leftToRight ? i : length - 1 - i].val)
      queue[i].left && queue.push(queue[i].left)
      queue[i].right && queue.push(queue[i].right)
    }
    queue.splice(0, length)
    // 或 queue = queue.slice(length)
    leftToRight = !leftToRight
    res.push(tmp)
  }
  return res
}

import { testFunction, TreeNode, listToTree } from '../../utils'
const testCases = [[listToTree([1, 2, 3, 4, null, null, 5])]]
const expectedResults = [[[1], [3, 2], [4, 5]]]
testFunction(levelOrder, testCases, expectedResults)
