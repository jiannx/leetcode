/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }
  let node = new TreeNode();
  node.val = (root1?.val || 0) + (root2?.val || 0);
  node.left = mergeTrees(root1?.left, root2?.left);
  node.right = mergeTrees(root1?.right, root2?.right);
  return node;
};
// @lc code=end

