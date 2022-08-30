/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let node = new TreeNode();
  if (preorder.length === 0) {
    return null;
  }
  let value = preorder[0];
  let size = inorder.indexOf(value);
  node.left = buildTree(preorder.slice(1, size + 1), inorder.slice(0, size));
  node.right = buildTree(preorder.slice(size + 1), inorder.slice(size + 1));
  node.val = value;
  return node;
};
// @lc code=end

