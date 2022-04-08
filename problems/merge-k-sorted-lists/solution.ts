function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const merge2Lists = (aList: ListNode | null, bList: ListNode | null) => {
    if (!aList) {
      return bList
    }
    if (!bList) {
      return aList
    }

    const dummyHead = new ListNode(),
      p = dummyHead

    while (aList && bList) {
      if (aList.val < bList.val) {
        p.next = aList
        aList = aList
      } else {
        p.next = bList
        bList = bList
      }
    }
    p.next = aList ?? bList
    return dummyHead.next
  }

  while (lists.length > 1) {}
  for (let i = 0; i < n; i = i + 2) {}

  return null
}

import { testFunction, ListNode } from '../../utils'
const testCases = []
const expectedResults = []
testFunction(mergeKLists, testCases, expectedResults)
