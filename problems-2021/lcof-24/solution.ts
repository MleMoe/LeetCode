class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function transToNodeList(arr: number[] | null): ListNode | null {
  if (!arr?.length) return null
  const result = new ListNode(arr[0])
  arr.slice(1).reduce((pre, x) => {
    pre.next = new ListNode(x)
    return pre.next
  }, result)
  return result
}

/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * @param head
 * @returns
 */
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  let pre = head,
    cur = head.next,
    later = cur?.next
  pre.next = null

  while (cur) {
    cur.next = pre
    pre = cur
    cur = later
    later = cur?.next
  }
  return pre
}

import { testFunction } from '../../utils'
const testCases = [[transToNodeList([1, 2, 3, 4, 5])]]
const expectedResults = [transToNodeList([5, 4, 3, 2, 1])]
testFunction(reverseList, testCases, expectedResults)
