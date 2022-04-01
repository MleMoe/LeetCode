class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 数组转单链表
 * @param arr
 * @returns
 */
function arrayToNodeList(arr: any[]): ListNode {
  const nodeList = new ListNode(arr.shift());
  arr.reduce((pre, item) => {
    pre.next = new ListNode(item);
    return pre.next;
  }, nodeList);

  return nodeList;
}

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * @param head
 * @returns
 */
function reversePrint(head: ListNode | null): number[] {
  const result = [];
  while (head) {
    result.unshift(head.val);
    head = head.next;
  }
  return result;
}

import { testFunction } from '../../utils';
const testcases = [[arrayToNodeList([1, 3, 2])]];
const expectedReults = [[2, 3, 1]];
testFunction(reversePrint, testcases, expectedReults);
