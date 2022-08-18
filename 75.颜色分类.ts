/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let m = nums.length;
  let i = 0;
  while (i < m) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++;
      continue;
    }
    if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      m--;
      continue;
    }
    i++;
  }
};
// @lc code=end

