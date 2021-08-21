//  Definition for a binary tree node.
export class TreeNode {
  val: number | string
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    val?: number | string,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function listToTree(items: (number | string)[]) {
  const nodes = items.map((x) => new TreeNode(x))
  nodes.forEach((node, index) => {
    index * 2 + 1 < nodes.length && (node.left = nodes[index * 2 + 1])
    index * 2 + 2 < nodes.length && (node.right = nodes[index * 2 + 2])
  })
  return nodes[0]
}
