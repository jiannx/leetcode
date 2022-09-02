/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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

function rob(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let selected = new Map(); // 当前节点选中的最优解
  let unselected = new Map(); // 当前节点未被选中的最优解
  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    selected.set(
      node,
      node.val +
      (unselected.get(node.left) || 0) +
      (unselected.get(node.right) || 0)
    );
    unselected.set(
      node,
      Math.max(selected.get(node.left) || 0, unselected.get(node.left) || 0) +
      Math.max(selected.get(node.right) || 0, unselected.get(node.right) || 0)
    );
  }
  dfs(root);
  return Math.max(selected.get(root), unselected.get(root));
};
// @lc code=end

