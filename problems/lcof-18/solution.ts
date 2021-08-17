//Definition for singly-linked list.
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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head || head?.val === val) {
    return head?.next
  }
  const result = head
  let cur = head
  while (cur) {
    if (cur.next?.val === val) {
      cur.next = cur.next?.next
      return result
    }
    cur = cur.next
  }
}

import { testFunction } from '../../utils'
const testCases = [[transToNodeList([4, 5, 1, 9]), 1]]
const expectedResults = [transToNodeList([4, 5, 9])]
testFunction(deleteNode, testCases, expectedResults)
