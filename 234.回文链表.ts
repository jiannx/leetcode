/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let stack = [];
  let node = head;
  while (node) {
    stack.push(node.val);
    node = node.next;
  }
  node = head;
  let res = true;
  while (node) {
    if (stack.pop() !== node.val) {
      res = false;
      break;
    }
    node = node.next;
  }
  return res;
};
// @lc code=end

