function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) {
    return false
  }
  // 先来一个层次遍历
  // 和 B 头节点值相同
  const nodes: TreeNode[] = []
  let p: TreeNode
  const queue = [A]
  while (queue.length) {
    p = queue.shift()
    p.val === B.val && nodes.push(p)
    p.left && queue.push(p.left)
    p.right && queue.push(p.right)
  }

  // 判断是否相等，使用递归
  const isEqual = (a: TreeNode | null, b: TreeNode | null) => {
    if (!b) {
      return true
    }
    if (!a || a.val !== b.val) {
      return false
    }
    return isEqual(a.left, b.left) && isEqual(a.right, b.right)
  }

  // 依次遍历节点
  for (const node of nodes) {
    if (isEqual(node, B)) {
      return true
    }
  }

  return false
}

import { testFunction, TreeNode, listToTree } from '../../utils'
const testCases = [
  [listToTree([3, 4, 5, 1, 2]), listToTree([4, 1])],
  [listToTree([1, 2, 3]), listToTree([3, 1])],
]
const expectedResults = [true, false]
testFunction(isSubStructure, testCases, expectedResults)
