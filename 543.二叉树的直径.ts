/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0
  function depth(root) {
    if (!root) return 0
    const leftHeight = depth(root.left)
    const rightHeight = depth(root.right)
    res = Math.max(leftHeight + rightHeight, res)
    return 1 + Math.max(leftHeight, rightHeight)
  }
  depth(root)
  return res
};
// @lc code=end

