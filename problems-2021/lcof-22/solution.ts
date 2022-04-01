// Definition for singly-linked list.
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
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 * @param head 
 * @param k 
 * @returns 
 */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null
  }
  let result = head
  let index = 1
  while (head.next) {
    if (index >= k) {
      result = result.next
    }
    index++
    head = head.next
  }

  return index >= k ? result : null
}

import { testFunction } from '../../utils'
const testCases = [[transToNodeList([1, 2, 3, 4, 5]), 2]]
const expectedResults = [transToNodeList([4, 5])]
testFunction(getKthFromEnd, testCases, expectedResults)
