/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  function merge(l1, l2) {
    const dummyHead = new ListNode();
    let cur = dummyHead;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
    return dummyHead.next;
  }

  function mergeSort(head, tail) {
    if (!head) return head; // 节点个数为0
    if (head.next === tail) { // 节点个数为1
      head.next = null;
      return head;
    }
    let slow = head;
    let fast = head;
    while (fast !== tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast !== tail) {
        fast = fast.next
      }
    }
    return merge(mergeSort(head, slow), mergeSort(slow, tail));
  }

  return mergeSort(head, null);
};
// @lc code=end

