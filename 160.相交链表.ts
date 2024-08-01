/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  /**
   * 相交的两个链表，相交后的节点数量必定一致，即相交点一定在短链表内
   * 下面代码为另外一种方案
   * 链表 headA 和 headB 的长度分别是 m 和 n。
   * 假设链表 headA 的不相交部分有 a 个节点
   * 链表 headB 的不相交部分有 b 个节点
   * 两个链表相交的部分有 c 个节点
   * 则有 a+c=m，b+c=n。
   */
  let nodeA = headA;
  let nodeB = headB;
  if (!nodeA || !nodeB) {
    return null;
  }
  while (nodeA != nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }
  return nodeA;
};
// @lc code=end

