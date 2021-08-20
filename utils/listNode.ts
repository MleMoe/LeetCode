export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function transToNodeList(arr: number[] | null): ListNode | null {
  if (!arr?.length) return null
  const result = new ListNode(arr[0])
  arr.slice(1).reduce((pre, x) => {
    pre.next = new ListNode(x)
    return pre.next
  }, result)
  return result
}
