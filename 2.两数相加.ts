/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let node = new ListNode(0);
  let cur: ListNode = node;
  let carry = 0;
  while(l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(val);
    cur = cur.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if(carry === 1) {
    cur.next = new ListNode(1);
  }
  return node.next;
};
// @lc code=end

