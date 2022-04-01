function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  let head = new ListNode(),
    p = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  p.next = l1 ? l1 : l2

  return head.next
}

import { ListNode, transToNodeList } from '../../utils/listNode'
import { testFunction } from '../../utils'
const testCases = [[transToNodeList([1, 2, 4]), transToNodeList([1, 3, 4])]]
const expectedResults = [transToNodeList([1, 1, 2, 3, 4, 4])]
testFunction(mergeTwoLists, testCases, expectedResults)
