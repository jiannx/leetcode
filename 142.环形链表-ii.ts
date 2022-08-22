/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  let node = head;
  let node2 = head;
  while (node && node2) {
    node = node.next;
    node2 = node2.next?.next;
    if (node === node2) {
      let start = head;
      while (start !== node) {
        start = start.next;
        node = node.next;
      }
      return start;
    }
  }
  return null;
};
// @lc code=end

