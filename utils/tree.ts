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

export function listToTree(items: (number | string | null)[]) {
  // 补充完整 null 序列
  for (
    let i = 0;
    i < items.length && items.slice(i).find((el) => el !== null) !== undefined;
    i++
  ) {
    const item = items[i]
    if (item === null) {
      items.splice(i * 2 + 1, 0, null, null)
    }
  }

  // 初始化节点
  const nodes = items.map((x) => (x !== null ? new TreeNode(x) : null))
  // 为非空节点配置子节点
  nodes.forEach((node, index) => {
    node && index * 2 + 1 < nodes.length && (node.left = nodes[index * 2 + 1])
    node && index * 2 + 2 < nodes.length && (node.right = nodes[index * 2 + 2])
  })
  // inOrder(nodes[0])
  return nodes[0]
}

function inOrder(root: TreeNode) {
  const nums = []
  let p = root
  const stack: TreeNode[] = []
  while (p || stack.length) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      const node = stack.pop()
      nums.push(node.val)
      p = node.right
    }
  }
  // console.log(nums.length)
  console.log(nums)
  return nums
}
