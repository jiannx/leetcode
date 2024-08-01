/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let curNode: ListNode | null = dummyNode;
  while (curNode && curNode.next && curNode.next.next) {
    let firstNode: ListNode = curNode.next,
      secNode: ListNode = curNode.next.next,
      thirdNode: ListNode | null = curNode.next.next.next;
    curNode.next = secNode;
    secNode.next = firstNode;
    firstNode.next = thirdNode;
    curNode = firstNode;
  }
  return dummyNode.next;
};
// @lc code=end

