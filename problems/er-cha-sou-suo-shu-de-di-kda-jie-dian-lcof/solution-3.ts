/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargest(root: TreeNode | null, k: number): number {
  const nums = []
  let p = root
  const stack: TreeNode[] = []
  while (p || stack.length) {
    if (p) {
      stack.push(p)
      p = p.right
    } else {
      const node = stack.pop()
      nums.push(node.val)
      if (nums.length === k) {
        return nums[k - 1]
      }
      p = node.left
    }
  }
}

import { testFunction, TreeNode, listToTree } from '../../utils'
const testCases = [
  [listToTree([3, 1, 4, null, 2]), 1],
  [listToTree([5, 3, 6, 2, 4, null, null, 1]), 3],
  [
    listToTree([
      18,
      0,
      40,
      null,
      2,
      22,
      49,
      1,
      17,
      21,
      32,
      45,
      null,
      null,
      null,
      9,
      null,
      19,
      null,
      29,
      37,
      44,
      47,
      8,
      13,
      null,
      20,
      26,
      30,
      33,
      39,
      42,
      null,
      46,
      48,
      3,
      null,
      10,
      16,
      null,
      null,
      24,
      27,
      null,
      31,
      null,
      35,
      38,
      null,
      41,
      43,
      null,
      null,
      null,
      null,
      null,
      4,
      null,
      12,
      14,
      null,
      23,
      25,
      null,
      28,
      null,
      null,
      34,
      36,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      7,
      11,
      null,
      null,
      15,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      5,
      null,
      null,
      null,
      null,
      null,
      null,
      6,
    ]),
    35,
  ],
]
const expectedResults = [4, 4, 15]
testFunction(kthLargest, testCases, expectedResults)
