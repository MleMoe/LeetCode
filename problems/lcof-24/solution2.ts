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
  let result = null
  let cur = head
  while (head) {
    head = head.next
    cur.next = result
    result = cur
    cur = head
  }
  return result
}

import { testFunction } from '../../utils'
const testCases = [[transToNodeList([1, 2, 3, 4, 5])]]
const expectedResults = [transToNodeList([5, 4, 3, 2, 1])]
testFunction(reverseList, testCases, expectedResults)
