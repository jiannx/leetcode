/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  let result = [];
  let stack = [];
  let node = root;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node)
      node = node.left;
    } else {
      let n = stack.pop();
      result.push(n.val);
      node = n.right;
    }
  }
  return result;
};

// function inorderTraversal(root: TreeNode | null): number[] {
//   let result = [];
//   function match(node) {
//     if (!node) {
//       return;
//     }
//     if (node.left) {
//       match(node.left);
//     }
//     result.push(node.val);
//     if (node.right) {
//       match(node.right);
//     }
//   }
//   match(root);
//   return result;
// };
// @lc code=end

