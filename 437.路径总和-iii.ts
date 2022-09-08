/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function dfs(node, targetSum) {
  if (!node) {
    return 0
  }
  let count = 0;
  if (targetSum === node.val) {
    count++;
  }
  count += dfs(node.left, targetSum - node.val);
  count += dfs(node.right, targetSum - node.val);
  return count;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  let nodeCount = dfs(root, targetSum);
  let leftCount = pathSum(root.left, targetSum);
  let rightCount = pathSum(root.right, targetSum);
  return nodeCount + leftCount + rightCount;
};
// @lc code=end

