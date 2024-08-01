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
  /**
   * 双指针
   * fast每次向前走2步，slow每次向前走一步，如果存在环，则一定会在环内相遇
   * （进入环后，fast以每次一步向slow靠近）
   * 当相遇时，f = 2s fast步数=2倍 slow的步数
   * f = s + n*c fast步数等于s的步数+n圈
   * 2s = s + nc，推到 s = nc，即s的步数为n圈
   * 入环点的坐标为 x + nc，求取x，即让s再走x步
   * 再创建指针从头开始走，s同时走，如果相等，即为x
   */
  let fast = head;
  let slow = head;
  while (fast && slow) {
    fast = fast.next?.next;
    slow = slow.next;
    if (fast === slow) {
      let start = head;
      while (start !== slow) {
        start = start.next;
        slow = slow.next;
      }
      return start;
    }
  }
  return null;
};
// @lc code=end

