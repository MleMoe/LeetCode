/**
 * 根据加法思想，一次遍历两个链表（可能多出一个进位）。
 * 需考虑：当到达某个链表结尾的处理方法，以及如何保留有效节点（留一个空的头节点）。
 * @param l1
 * @param l2
 * @returns
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode()
  let p = result
  // 暂时保存中间 sum 和进位
  let tmp = 0

  while (l1 || l2 || tmp) {
    tmp = (l1?.val ?? 0) + (l2?.val ?? 0) + tmp
    p.next = new ListNode(tmp % 10)
    tmp = Math.floor(tmp / 10)

    p = p.next

    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }

  return result.next
}

import { testFunction, ListNode, transToNodeList } from '../../utils'
const testCases = [
  [transToNodeList([2, 4, 3]), transToNodeList([5, 6, 4])],
  [transToNodeList([9, 9, 9, 9]), transToNodeList([9, 9, 9, 9, 9, 9, 9])],
]
const expectedResults = [
  transToNodeList([7, 0, 8]),
  transToNodeList([8, 9, 9, 9, 0, 0, 0, 1]),
]
testFunction(addTwoNumbers, testCases, expectedResults)
