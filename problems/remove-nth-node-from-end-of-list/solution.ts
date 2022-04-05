/**
 * 遍历寻找删除的 preNode，由 num -> n 判断当前哪个是倒数第 n+1 个节点。边界：倒数第 length 个。
 * 时间 O(n)
 * @param head
 * @param n
 * @returns
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let preNode = head
  let cur = head,
    num = 1
  while (cur.next) {
    cur = cur.next
    num++
    if (num > n + 1) {
      preNode = preNode.next
    }
  }
  if (n === num) {
    return head.next
  }
  preNode.next = preNode.next.next
  return head
}

import { testFunction, ListNode } from '../../utils'
const testCases = []
const expectedResults = []
testFunction(removeNthFromEnd, testCases, expectedResults)
