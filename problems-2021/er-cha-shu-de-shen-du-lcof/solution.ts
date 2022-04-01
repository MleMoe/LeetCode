function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

import { listToTree, testFunction, TreeNode } from '../../utils'
const testCases = [[listToTree([3, 9, 20, null, null, 15, 7])]]
const expectedResults = [3]
testFunction(maxDepth, testCases, expectedResults)
