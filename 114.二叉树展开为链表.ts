/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  while (root) {
    // 如果左侧节点不存在，则直接处理下一节点
    if (!root.left) {
      root = root.right;
    } else {
      let temp = root.left;
      // 获取左侧子树的最右侧节点（先序遍历，右侧节点为最后一个节点）
      while(temp.right) {
        temp = temp.right;
      }
      // 左子树最右节点添加右子树
      temp.right = root.right;
      // 变更当前右子树为左子树
      root.right = root.left;
      root.left = null;
      // 开始下一次遍历
      root = root.right;
    }
  }
};
// @lc code=end

