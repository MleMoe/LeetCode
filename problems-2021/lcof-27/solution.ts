function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root
  }
  const queue = [root]
  let p: TreeNode
  while (queue.length) {
    p = queue.shift()
    ;[p.left, p.right] = [p.right, p.left]
    p.left && queue.push(p.left)
    p.right && queue.push(p.right)
  }
  return root
}

import { testFunction, TreeNode, listToTree } from '../../utils'

const testCases = [[listToTree([4, 2, 7, 1, 3, 6, 9])]]
const expectedResults = [listToTree([4, 7, 2, 9, 6, 3, 1])]
testFunction(mirrorTree, testCases, expectedResults)
