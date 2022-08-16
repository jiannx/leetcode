/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function compare(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2 || node1.val !== node2.val) {
    return false;
  }
  return compare(node1.left, node2.right) && compare(node1.right, node2.left);
}


function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return compare(root.left, root.right);
};
// @lc code=end

