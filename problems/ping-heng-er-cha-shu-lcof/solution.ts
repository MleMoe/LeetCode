/**
 * 判断是否二叉树
 * 使用递归版本的后序遍历 + 剪枝
 * @param root
 * @returns
 */
function isBalanced(root: TreeNode | null): boolean {
	const recur = (p: TreeNode) => {
		if (!p) {
			return 0
		}
		const leftDepth = recur(p.left)
		if (leftDepth === -1) {
			return -1
		}
		const rightDepth = recur(p.right)
		if (rightDepth === -1) {
			return -1
		}
		return Math.abs(leftDepth - rightDepth) <= 1
			? Math.max(leftDepth, rightDepth) + 1
			: -1
	}
	return recur(root) !== -1
}

import { testFunction, TreeNode, listToTree } from '../../utils'
const testCases = [
	[listToTree([3, 9, 20, null, null, 15, 7])],
	[listToTree([1, 2, 2, 3, 3, null, null, 4, 4])],
]
const expectedResults = [true, false]
testFunction(isBalanced, testCases, expectedResults)
