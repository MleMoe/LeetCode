function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const compare = (A: TreeNode | null, B: TreeNode | null): boolean => {
    if (!A && !B) {
      return true
    }
    if (A?.val !== B?.val) {
      return false
    }
    return compare(A?.left, B?.right) && compare(A?.right, B?.left)
  }

  return compare(root.left, root.right)
}

import { testFunction, TreeNode, listToTree } from '../../utils'

const testCases = [
  [listToTree([1, 2, 2, 3, 4, 4, 3])],
  [listToTree([1, 2, 2, null, 3, null, 3])],
]
const expectedResults = [true, false]
testFunction(isSymmetric, testCases, expectedResults)
