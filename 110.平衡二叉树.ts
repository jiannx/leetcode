/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function depth(node) {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(depth(node.left), depth(node.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end

