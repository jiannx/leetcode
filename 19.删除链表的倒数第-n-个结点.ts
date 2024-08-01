/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let startNode = new ListNode();
  startNode.next = head;
  /**
   * 双指针
   */
  let node = startNode;
  let pre = startNode;
  while (n > 0) {
    pre = pre.next;
    n--;
  }

  while (pre && pre.next !== null) {
    pre = pre.next;
    node = node.next;
  }
  node.next = node.next.next;
  return startNode.next;
};
// @lc code=end

