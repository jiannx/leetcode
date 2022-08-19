/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  let res = [];
  function depth(node, depths) {
    if (!node) {
      return;
    }
    if (!res[depths]) {
      res[depths] = [];
    }
    res[depths].push(node.val);
    depth(node.left, depths + 1);
    depth(node.right, depths + 1);
  }
  depth(root, 0);
  return res;
};
// @lc code=end

